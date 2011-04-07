/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 * path: baidu/ui/Button.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/26
 */
///import baidu.ui.createUI;
///import baidu.event.on;
///import baidu.event.tap;
///import baidu.fn.bind;
///import baidu.dom.addClass;
///import baidu.dom.setAttr;
///import baidu.dom.removeClass;

/**
 * button基类，创建一个button实例
 * @class button类
 * @param {Object} [options] 选项
 * @config {DOMElement}         element     
 * @config {Boolean}            disabled    按钮是否有效，默认为false（有效）。
 * @config {Function}           ontap       触摸单击时触发
 * @config {Function}           onload      页面加载时触发
 * @config {Function}           onturn      旋转屏幕时触发
 * @config {Function}           ondisable   当调用button的实例方法disable，使得按钮失效时触发。
 * @config {Function}           onenable    当调用button的实例方法enable，使得按钮有效时触发。
 * @returns {Button}                        Button类
 */
baidu.ui.Button = baidu.ui.createUI( function() {

}).extend({
    uiType: 'button',
    
    /**
     * 渲染页面元素
     * @private
     */
    _render: function() {
        var me = this,
            element = me.element,
            listener = {
                touchstart: baidu.fn.bind('_onTouchStart', me),
                touchmove: baidu.fn.bind('_onTouchMove', me),
                touchend: baidu.fn.bind('_onTouchEnd', me)
            };
        
        baidu.event.on(element, 'tap', listener, true);
        me.dispatchEvent("onload");
    },
    
    /**
     * 触发touchStart事件
     * @private
     */
    _onTouchStart: function(e){
        var me = this;
        if(me.disabled){
            e.preventDefault();
            return;
        }
        baidu.dom.addClass(me.element, me.getClass('taped'));
        me.dispatchEvent("tapstart");    
    },
    
    /**
     * 触发touchMove事件
     * @private
     */
    _onTouchMove: function(e){
        var me = this;
        baidu.dom.removeClass(me.element, me.getClass('taped'));
    },
    
    /**
     * 触发touchEnd事件
     * @private
     */
    _onTouchEnd: function(e){
        var me = this;
        baidu.dom.removeClass(me.element, me.getClass('taped'));   
        me.dispatchEvent("tap");  
    },
    
    /**
     * 删除disabled属性
     */
    enable: function(){
        var me = this,
            element = me.element;
        baidu.dom.setAttr(element, 'disabled', false);
        baidu.dom.removeClass(element, me.getClass('disable'));
        me.dispatchEvent('enable');
    },
    
    /**
     * 设置disabled属性
     */
    disable: function(){
        var me = this,
            element = me.element;
        baidu.dom.setAttr(element,'disabled', 'disabled');
        baidu.dom.addClass(element, me.getClass('disable'));
        me.dispatchEvent('disable');
    }
});