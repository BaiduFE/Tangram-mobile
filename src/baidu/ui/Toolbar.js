/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.event.tap;
///import baidu.event.customScroll;
///import baidu.event.turn;
///import baidu.event.on;
///import baidu.dom._styleFilter.px;
///import baidu.dom.setStyles;
///import baidu.dom.toggle;
///import baidu.dom.show;
///import baidu.dom.hide;
///import baidu.lang.isNumber;

/**
 * toolbar基类，创建一个toolbar实例
 * @class Toolbar类
 * @param {Object}           options                选项
 * @config {DOMElement}      element                页面目标元素
 * @config {Boolean}         [hideOnTap = true]     点击是否隐藏
 * @config {String}          [top]                  顶部距离
 * @config {String}          [bottom]               底部距离
 * @returns {Toolbar}              Toolbar类
 * */
baidu.ui.Toolbar = baidu.ui.createUI( function() {

}).extend({
    uiType:'toolbar',
    
    hideOnTap: true,

    /**
     * 渲染页面元素
     * @private
     * */
    _init: function() {
        var me = this;
        me._update();
        me._initListener();
    },
    
    /**
     * 更新toolbar
     * @private
     * */
    _update: function() {
        var me = this,
            element = me.element;

        baidu.dom.setStyles(element, {
            "position": "absolute",
            "width": window.innerWidth
        });
        
        me._setPostion();   
    },
    
    /**
     * 设置toolbar位置
     * @private
     */
    _setPostion: function(){
        var me = this,
            top = me.top,
            bottom = me.bottom,
            element = me.element,
            isNumber = baidu.lang.isNumber;

        if(isNumber(top)) {
            top += window.pageYOffset;
        } else if(isNumber(bottom)) {
            top = window.pageYOffset + window.innerHeight - element.offsetHeight - bottom;
        } else {
            top = window.pageYOffset;
        }

        baidu.dom.setStyles(element, {
            "top" : top,
            "left" : 0
        });
    },
    
    /**
     * 初始化事件监听
     * @private
     */
    _initListener: function(){
        var me = this;
        
        me.on(document, 'customScroll', '_onCustomScroll');
        me.on(window, 'turn', '_onTurn');
        
        if(me.hideOnTap) {
            me.on(document, 'tap', '_onTap');
        };
    },
    
    /**
     * 屏幕滚动事件
     * @private
     */
    _onCustomScroll: function(e){
        var me = this,
            element = me.element;
            
        if (e.scrollType == "scrollstop") {
            baidu.dom.show(element);
            me._setPostion();
        } else {
            baidu.dom.hide(element);
        }
    },
    
    /**
     * 单击隐藏事件
     * @private
     * */
    _onTap: function() {
        baidu.dom.toggle(this.element);
    },
    
    /**
     * 屏幕翻转触发事件
     * @param {object} e event对象
     * @private
     * */
    _onTurn: function(e) {
        var me = this;
        
        me._update();
        me.fire('turn', e);
    }
})
