/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx.$translate;

/**
 * 滑动效果
 *       参考自sencha touch
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 * @config {Boolean} [out = false] 运动类型是否为out(从正常显示运动到消失)
 * @config {String} [direction = 'left'] 运动方向 "left" || "right" || "up" || "down"
 * @return {DOMElement} 目标元素
 */
baidu.fx.slide = function(elem, options) {
    var
        options = options || {},
        
        direction = options.direction || "left",
        out = options.out,
        isHori = (direction == "left" || direction == "right"),
        
        elemWidth = elem.offsetWidth,
        elemHeight = elem.offsetHeight,
        
        fromX = (isHori && !out) ? elemWidth : 0, 
        fromY = (!isHori && !out) ? elemHeight : 0, 
        toX = (isHori && out) ? -elemWidth : 0, 
        toY = (!isHori && out) ? -elemHeight : 0;

    if (direction == 'right' || direction == 'down') {
        toY *= -1;
        toX *= -1;
        fromY *= -1;
        fromX *= -1;
    }

    baidu.fx.translate(elem, [toX + "px", toY + "px"], [fromX + "px", fromY + "px"], options);
    return elem;
};
