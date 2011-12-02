/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */
 
///import baidu.ui.createUI;
///import baidu.event.tap;

/**
 * 按钮
 * @class button类
 * @param {Object}              options       选项
 * @config {DOMElement}         element       页面目标元素
 * @config {Function}           [ontap]       触摸单击时触发
 * @config {Function}           [onload]      按钮加载时触发
 * @config {Function}           [ondisable]   当调用button的实例方法disable，使得按钮失效时触发。
 * @config {Function}           [onenable]    当调用button的实例方法enable，使得按钮有效时触发。
 * @returns {Button}                        Button类
 */
baidu.ui.Button = baidu.ui.createUI( function(options) {

}).extend({
    uiType: 'button',
    
    /**
     * 数据初始化
     * @private 
     */
    _setup: function(){
      var me = this;
      me.disabled = me.element.getAttribute('disabled');
      me.dispatchEvent('setup');  
    },
    
    /**
     * 初始化按钮
     * @private
     */
    _init: function() {
        var me = this;
        me.on(element, 'tap', '_onTap');
        me.dispatchEvent("onload");
    },
    
    /**
     * 触发tap事件
     * @param {object} e event对象
     * @private
     */
    _onTap: function(e){
        var me = this;
        if(me.disabled){
            return;
        }
        
        me.fire("tap", e);
    },

    /**
     * 删除disabled属性
     */
    enable: function() {
        var me = this,
            element = me.element;
        
        element.removeAttribute('disabled');
        me.disabled = false;
        me.dispatchEvent('enable');
    },
    
    /**
     * 设置disabled属性
     */
    disable: function() {
        var me = this,
            element = me.element;
        
        element.setAttribute('disabled', 'disabled');
        me.disabled = 'disabled';
        me.dispatchEvent('disable');
    }
});