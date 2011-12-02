/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Popup;
///import baidu.fx.$fade;

/**
 * 动画插件
 */
baidu.ui.Popup.extend({
	showFx: baidu.fx.fade,
    
    hideFx: baidu.fx.fade,
	
	/**
     * 显示弹出层
     */
    open: function() {
        var me = this,
            element = me.element;
        
        element.style.display = 'block';
        me._setPostion();
        
        me.dispatchEvent('beforeopen');
        
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
    close: function() {
        var me = this,
            element = me.element;
        
        me.dispatchEvent('beforeclose');
        
        me.hideFx(element, {
            'duration': 500,
            'out': true, 
            'onfinish': function(){
               me.element.style.display = 'none';
               me.dispatchEvent('close');
            }
       });
    }
});
