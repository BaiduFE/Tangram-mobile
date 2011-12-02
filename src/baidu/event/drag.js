/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.event.getTouchInfo;

/**
 * 触摸拖动事件
 * 对事件对象e扩展2个属性：
 *  deltaX: {number}   X轴拖动起始和终点位置差
 *  delta: {number}    Y轴拖动起始和终点位置差
 *
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.drag = function (elem, listener) {
    var tiggerThreshold = baidu.event.swipeTiggerThreshold,
        startX, startY,
        previousX, previousY,
        lock,
        touch,
        dragging,
        handlers = {
            touchstart : function (e) {
                //两个以上手指接触时不触发swipe事件
                lock = (e.touches && e.touches.length > 1);
    
                touch = baidu.event.getTouchInfo(e);
                previousX = startX = touch.pageX;
                previousY = startY = touch.pageY;
                dragging = true;
            },
            touchmove : function (e) {
                if (lock || !dragging){
                    return;
                }
               
                touch = baidu.event.getTouchInfo(e),
                deltaX = touch.pageX - startX,
                deltaY = touch.pageY - startY,
                distanceX = Math.abs(deltaX),
                distanceY = Math.abs(deltaY);
    
                touch["deltaX"] = deltaX;
                touch["deltaY"] = deltaY;
                touch["previousX"] = previousX;
                touch["previousY"] = previousY;
    
                listener.call(elem, touch, e);
    
                previousX = touch.pageX;
                previousY = touch.pageY;
    
            },
            touchend: function(e) {
                dragging = false;
            }
        };
        
    return handlers;
};
