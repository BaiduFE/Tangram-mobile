/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
* path: baidu/ui/Video.js
* author: walter
* version: 1.0.0
* date: 2011/3/29
*/
///import baidu.ui.createUI;
///import baidu.dom.getAttr;
///import baidu.dom.setStyles;
///import baidu.dom._styleFilter.px;
///import baidu.dom.insertBefore;
///import baidu.dom.create;
///import baidu.dom.show;
///import baidu.dom.hide;
///import baidu.fn.bind;
///import baidu.event.once;
///import baidu.event.tap;

/**
 * Video类
 * @class Video类
 * @param {Object} [options] 选项
 * @config {DOMElement}         element     
 * @config {Function}           onload      页面加载时触发
 * @config {Function}           onplay      视频播放时触发
 * @config {Function}           onpause     视频暂停时触发
 * @config {Function}           onend       视频播放结束时触发，当loop为true时，此事件将不会触发
 * @returns {Video}                        Video类
 */
baidu.ui.Video = baidu.ui.createUI( function() {

}).extend({
    uiType: 'video',
    
    /**
     * 渲染页面元素
     * @private
     */
    _render: function() {
        var me = this;

        me._initPoster();
        me._initListeners();

        me.dispatchEvent('load');
    },
    
    /**
     * 初始化poster
     * @private
     */
    _initPoster: function() {
        var me = this,
        element = me.element,
        width = element.offsetWidth,
        height = element.offsetHeight,
        posterUrl = baidu.dom.getAttr(element, 'poster'),
        poster;

        if(posterUrl) {
            poster = baidu.dom.create('div');
            baidu.dom.setStyles(poster, {
                width: width,
                height: height,
                background: '#000 url(' + posterUrl + ') center center no-repeat'
            });

            baidu.dom.insertBefore(poster, element);
            baidu.dom.hide(element);

            me._posterHandler = baidu.fn.bind('_onPosterTap', me);
            baidu.event.once(poster, 'click', me._posterHandler);

            me.poster = poster;
        }
    },
    
    /**
     * 初始化事件监听
     * @private
     */
    _initListeners: function() {
        var me = this,
        element = me.element;

        me._playHandler = baidu.fn.bind('fire', me, 'play');
        baidu.event.on(element, 'playing', me._playHandler);

        me._pauseHandler = baidu.fn.bind('fire', me, 'pause');
        baidu.event.on(element, 'pause', me._pauseHandler);

        me._endHandler = baidu.fn.bind('fire', me, 'end');
        baidu.event.on(element, 'ended', me._endHandler);

    },
    
    /**
     * poster单击事件
     * @private
     */
    _onPosterTap: function() {
        var me = this;
        baidu.dom.show(me.element);
        baidu.dom.hide(me.poster);
        me.play();
    },
    
    /**
     * 播放
     */
    play: function() {
        this.element.play();
    },
    
    /**
     * 暂停
     */
    pause : function() {
        this.element.pause();
    }
});
