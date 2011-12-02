/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.$getStyle;
///import baidu.fx.$start;

/**
 * 放大缩小效果
 *       参考自sencha touch
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 * @config {Boolean} [out = false] 运动类型是否为out(从正常显示运动到消失)
 * @config {String} [direction = 'left'] 运动方向 "left" || "right" || "up" || "down"
 * @return {DOMElement} 目标元素
 */
baidu.fx.pop = function(elem, options) {
    var
        options = options || {},
        curZ = baidu.getStyle(elem, 'z-index') == 'auto' ? 0 : baidu.getStyle(elem, 'z-index'),
        out = options.out,
        
        fromScale = out ? 1 : 0.01,
        toScale = out ? 0.01 : 1,
        
        fromOpacity = out ? 1 : 0,
        toOpacity = out ? 0 : 1,
        
        fromZ = out ? curZ : curZ + 1,
        toZ = out ? curZ : curZ + 1;
        
    options.from = {
        'webkitTransform': 'scale(' + fromScale + ')',
        'webkitTransformOrigin': '50% 50%',
        'opacity': fromOpacity
    };
    
    options.to = {
        'webkitTransform': 'scale(' + toScale + ')',
        'webkitTransformOrigin': '50% 50%',
        'opacity': toOpacity
    };
    
    baidu.fx.start(elem, options);
    return elem;
};
