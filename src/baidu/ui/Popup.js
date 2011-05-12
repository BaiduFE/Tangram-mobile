/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.dom.setStyles;
///import baidu.dom._styleFilter.px;
///import baidu.fx.fade;
///import baidu.dom.hide;
///import baidu.dom.create;
/**
 * 弹出层
 * @class popup类
 * @param   {Object}  [options]  选项.
 * @config  {DOMElement}  element
 * @config  {Boolean}     mask     是否启用遮罩层
 * @config  {Number}      zIndex  
 * @config {Function}     [onok]      点击确定按钮时触发
 * @config {Function}     [oncancel]  点击取消按钮时触发
 * @config {Function}     [onclose]  点击关闭按钮时触发
 * @return  {Popup}                Popup类
 */
baidu.ui.Popup = baidu.ui.createUI(function() {

}).extend({
    uiType: 'popup',

    mask: false,

    zIndex: 999,

    showFx: baidu.fx.fade,
    
    hideFx: baidu.fx.fade,

    /**
     * 数据初始化
     * @private
     */
    _setup: function() {
        var me = this,
            element = me.element;

        baidu.ui.Base._setup.call(me);
        me.dispatchEvent('setup');
    },

    /**
     * 渲染页面元素
     * @private
     */
    _init: function() {
        var me = this,
            element = me.element;
        
        baidu.ui.Base._init.call(me);
        
        baidu.dom.setStyles(element, {
            'display': 'none',
            'position': 'absolute',
            'zIndex': me.zIndex
        });
        
        if (me.mask && !baidu.ui.Mask._instance) {
            me._addMask();
        }
        
        me.each('ok', function(item, i){
            me.on(item.element, 'tap', '_onOk');
        });
        
        me.each('cancel', function(item, i){
            me.on(item.element, 'tap', '_onCancel');
        });

        me.dispatchEvent('onload');
    },

    /**
     * 添加一个mask类
     * @private
     */
    _addMask: function() {
        var ui,
            div = baidu.dom.create('div',{
               't-ui': 'Mask',
               'style': "display:none;opacity:0.4;background-color:black"
            });

        document.body.appendChild(div);
        
        ui = new baidu.ui.Mask({element: div});
        ui._setup();
        ui._init();
    },

    /**
     * 设置元素的位置
     * @private
     */
    _setPostion: function() {
        var me = this,
            element = me.element,
            left = ( window.innerWidth - element.offsetWidth) / 2,
            top = ( window.innerHeight - element.offsetHeight ) / 2;

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
        var me = this,
            element = me.element;
        
        element.style.display = 'block';
        me._setPostion();
        
        if (me.mask) {
            baidu.ui.Mask._instance.open();
        }
        
        me.showFx(element, {
            'duration': 800,
            'out': false,
            'onfinish': function(){
                me.dispatchEvent('open');
            } 
        });

    },
    
    /**
     * 关闭弹出层
     * @param {Function} fn 回调函数
     */
    close: function(fn) {
        var me = this,
            element = me.element;
        
        if (me.mask) {
            baidu.ui.Mask._instance.close();
        }

        me.hideFx(element, {
            'duration': 500,
            'out': true, 
            'onfinish': function(){
               baidu.dom.hide(element);
               me.dispatchEvent('close');
               fn();
            }
       });
    },
    
    /**
     * 确认
     * @private
     */
    _onOk: function(){
        var me = this;
        me.close(function(){
            me.dispatchEvent('ok');
        });
    },
    
    /**
     * 取消
     * @private
     */
    _onCancel: function(){
        var me = this;
        me.close(function(){
            me.dispatchEvent('cancel');
        });
    }
});
