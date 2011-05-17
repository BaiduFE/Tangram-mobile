/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.dom._styleFixer.opacity;
///import baidu.dom._styleFilter.px;
///import baidu.dom.setStyles;
///import baidu.page.getWidth;
///import baidu.page.getHeight;
///import baidu.dom.hide;
/**
 * 遮罩层类
 * @class Mask类
 * @param   {Object}      [options]  选项.
 * @config  {DOMElement}  element
 * @config  {Number}      zIndex
 * @return  {Mask}                   Mask类.
 */
baidu.ui.Mask = baidu.ui.createUI(function() {

}).extend({

    uiType: 'mask',

    zIndex: 998,

    /**
     * 数据初始化
     * @private
     */
    _setup: function() {
        var me = this;
        
        baidu.ui.Base._setup.call(me);
        
        if(!baidu.ui.Mask._instance ){
          baidu.ui.Mask._instance = me;
        }
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
          'top': 0, 
          'zIndex': me.zIndex
      });
    },

    /**
     * 设置Mask的宽、高
     * @private
     */
    _update: function() {
       baidu.dom.setStyles(this.element, {
           'width': baidu.page.getWidth(),
           'height': baidu.page.getHeight()
       });
    },

    _onTurn: function(e) {
      var me = this;

      me._update();
      me.fire('turn', e);
    },

    /**
     * 显示遮罩层
     */
    open: function() {
        var me = this;
        
        me._update();
        me.element.style.display = 'block';
        me.dispatchEvent('open');
    },

    /**
     * 关闭遮罩层
     */
    close: function() {
        var me = this;

        baidu.dom.hide(me.element);
        me.dispatchEvent('close');
    }
});
