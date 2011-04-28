/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;
///import baidu.fx.translate;

/**
 * 滑动效果
 *       参考自sencha touch
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.fx.start，忽略from to参数，新增：
 *        {
 *            out : {boolean} false    //运动类型是否为out(从正常显示运动到消失)
 *            direction : {string}  "left" || "right" || "up" || "down"  //运动方向
 *        }
 */
baidu.fx.slide = function(elem, options) {
    var
        options = options || {},
        elem = baidu.dom.g(elem),
        
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
