/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.getStyle;
///import baidu.object.extend;
///import baidu.fx.start;

/**
 * 淡入淡出效果
 * @param {DOMElement} elem  目标元素
 * @param {Object} [options] 选项 
 * @config {Boolean} [out = false] 运动类型是否为out(从正常显示运动到消失)
 * @return {DOMElement} 目标元素
 */
baidu.fx.fade = function(elem, options) {
    var out = options && options.out;
    
    options = baidu.object.extend(options || {}, {
        from : {
            opacity : (out ? 1 : 0)
        },
        to : {
            opacity : (out ? 0 : 1)
        }
    });
    baidu.fx.start(elem, options);
    return elem;
};	
