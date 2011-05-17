/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.dom.children;
///import baidu.dom.setStyle;
///import baidu.dom.g;
///import baidu.event.swipe;
///import baidu.fx.translate;
///import baidu.dom._styleFixer.float;

/**
 * Carousel基类，创建一个Carousel实例
 * @class Carousel类
 * @param {Object} [options] 选项
 * @config {DOMElement} element
 * @config {String}     flip        滚动的方式，取值：item(默认，一次滚动一项)，page(一次滚动一页)
 * @config {Boolean}    animation   是否启用动画效果，取值：true(默认)，flase
 * @config {Function}   onScrollEnd   滚动后触发事件
 * @returns {Carousel}              Carousel类
 * */

baidu.ui.Carousel = baidu.ui.createUI( function() {

}).extend({

    uiType:'carousel',

    flip : 'item',

    /**
     * 数据初始化
     * @private 
     */
    _setup: function() {
        var me = this,
            items = [],
            element,
            pagesize;

        baidu.ui.Base._setup.call(me);

        element = me.element;
        
        if(me.roles["content"]) {
            me.content = me.roles["content"][0].element;
            items = baidu.dom.children(me.content);
        }

        if(items.length>0) {
            me.items = items;
            me.activeitem = 0;
            me.itemWidth = items[0].offsetWidth;
            pagesize = Math.floor(element.offsetWidth / me.itemWidth);
            me.swipeItemCount = me.flip == 'item' ? 1 : pagesize;
        }
    },
    
    /**
     * 渲染页面元素
     * @private
     * */
    _init: function() {
        var me = this,
            element = me.element;
            
        baidu.ui.Base._init.call(me);
        baidu.dom.setStyle(element, "overflow", "hidden");
    },

    /**
     * 滑动时触发事件
     * @private
     * 
     */
    _onSwipe: function(e) {
        var me = this,
            swipeItemCount = 
                e.direction == "left" ? me.swipeItemCount : -me.swipeItemCount;
        
        me.goToItem(me.activeitem + swipeItemCount);
    },
    
    /**
     *  滑动到到制定的item
     *  @param {Number} index 滑动到指定的索引处
     * 
     */
    goToItem: function(index) {
        var me = this;        
        index = Math.min(Math.max(0, index), me.items.length - 1);
        
        if(index == me.activeitem){
            return;
        }
        
        me._translate(me.content, -index * me.itemWidth);
        me.activeitem = index;
    },
    
    /**
     * 动画效果
     * @param {HTMLElementv} element 目标元素
     * @param {Number} deltaX 移动距离
     */
    _translate: function(element, deltaX){
         var me = this;
         baidu.fx.translate(element, [deltaX, 0], [], {
            "onfinish": function(){
                me.dispatchEvent("swipe");
            }
        });
    }
});