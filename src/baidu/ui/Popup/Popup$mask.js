/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Popup;
///import baidu.ui.Mask;
///import baidu.dom.create;
///import baidu.ui.Base.addEventListener;

/**
 * 遮罩层插件
 * @param {Object} options 创建scrollBar的自定义参数.
 * @config  {Boolean}  [mask = true] 是否启用遮罩层
 */
baidu.ui.Popup.extend({
    mask: true,

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
        ui.setup();
    },
})

baidu.ui.Popup.register( function(me) {
    if(!me.mask) {
        return;
    }

    me.addEventListener('onload', function() {
        me._addMask();
    });
    
    me.addEventListener('onbeforeopen', function() {
        baidu.ui.Mask._instance.open();
    });
    
    me.addEventListener('onbeforeclose', function() {
        baidu.ui.Mask._instance.close();
    });
});