/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx.$start;
///import baidu.browser.has3d;

/**
 * 翻转效果
 *       参考自sencha touch
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 * @config {Boolean} [out = false] 运动类型是否为out(从正常显示运动到消失)
 * @config {String} [direction = 'left'] 运动方向 "left" || "right" || "up" || "down"
 * @return {DOMElement} 目标元素
 */
baidu.fx.flip = function(elem, options) {
    var 
        options = options || {},
        direction = options.direction || "left",
        out = options.out,
        isHori = direction == 'up' || direction == 'down',
        
        rotateProp = isHori ? "X" : "Y",
        fromScale = out ? 1 : 0.8,
        toScale = out ? 0.8 : 1,
        fromRotate = out ? 0 : 180,
        toRotate = out ? -180 :0;

    if (direction == 'right' || direction == 'down') {
        toRotate *= -1;
        fromRotate *= -1;
    }

    options.from = {
        'webkitTransform': 'rotate' + rotateProp + '(' + fromRotate + 'deg) scale(' + fromScale + ')',
        'webkitBackfaceVisibility': 'hidden'
    };
    options.to = {
        'webkitTransform': 'rotate' + rotateProp + '(' + toRotate + 'deg) scale(' + toScale + ')',
        'webkitBackfaceVisibility': 'hidden'
    };
    
    if (baidu.browser.has3d) {
        elem.parentNode.style['webkitPerspective'] = 1200;
        elem.parentNode.style['webkitTransformStyle'] = 'preserve-3d';
    }
    
    baidu.fx.start(elem, options);
    return elem;
};
