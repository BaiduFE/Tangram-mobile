/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.event.tap;
///import baidu.dom.$setStyles;
///import baidu.ui.Base.on;
///import baidu.ui.Base.each;
///import baidu.ui.$getRoles;


/**
 * 弹出层
 * @class popup类
 * @param   {Object}  [options]  选项.
 * @config  {DOMElement}  element
 * @config  {Number}      zIndex  
 * @config {Function}     [onok]      点击确定按钮时触发
 * @config {Function}     [oncancel]  点击取消按钮时触发
 * @config {Function}     [onclose]  点击关闭按钮时触发
 * @return  {Popup}                Popup类
 */
baidu.ui.Popup = baidu.ui.createUI(function() {

}).extend({
    uiType: 'popup',

    zIndex: 999,

    /**
     * 数据初始化
     * @private
     */
    _setup: function() {
        this.dispatchEvent('setup');
    },

    /**
     * 渲染页面元素
     * @private
     */
    _init: function() {
        var me = this,
            element = me.element;
        
        baidu.dom.setStyles(element, {
            'display': 'none',
            'position': 'absolute',
            'zIndex': me.zIndex
        });
        
        me.each('ok', function(item, i){
            me.on(item.element, 'tap', '_onOk');
        });
        
        me.each('cancel', function(item, i){
            me.on(item.element, 'tap', '_onCancel');
        });
		
		me.on(window, 'turn', '_onTurn');
        me.dispatchEvent('onload');
    },

    /**
     * 设置元素的位置
     * @private
     */
    _setPostion: function() {
        var me = this,
            element = me.element,
            left = ( window.innerWidth - element.offsetWidth) / 2 + 'px',
            top = ( window.innerHeight - element.offsetHeight ) / 2 + 'px';

        baidu.dom.setStyles(element, {'top': top, 'left': left});
    },

    /**
     * 屏幕翻转时调用
     * @private
     */
    _onTurn: function(e) {
       var me = this;      
       me._setPostion();
       me.fire('turn', e);
    },

    /**
     * 显示弹出层
     */
    open: function() {
        var me = this;
        me.element.style.display = 'block';
        me._setPostion();
        me.dispatchEvent('open');
    },
    
    /**
     * 关闭弹出层
     */
    close: function() {
        var me = this;
		me.element.style.display = 'none';
        me.dispatchEvent('close');
    },
    
    /**
     * 确认
     * @private
     */
    _onOk: function(){
        var me = this;
        me.close();
        me.dispatchEvent('ok');
    },
    
    /**
     * 取消
     * @private
     */
    _onCancel: function(){
        var me = this;
        me.close();
        me.dispatchEvent('cancel');
    }
});
