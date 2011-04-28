/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 */

///import baidu.event;

baidu.event.dragTiggerThreshold = 5;



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
    var 
        tiggerThreshold = baidu.event.swipeTiggerThreshold,
        startX, startY,
        lock,
        handlers = {
            touchstart : function (e) {
                //两个以上手指接触时不触发swipe事件
                lock = (e.touches && e.touches.length > 1);
                var touch = e.targetTouches ? e.targetTouches[0] : e;
                    startX = touch.pageX;
                    startY = touch.pageY;
            },
            touchmove : function (e) {
                if (lock) return;
                var touch = e.changedTouches ? e.changedTouches[0] : e,
                    deltaX = touch.pageX - startX,
                    deltaY = touch.pageY - startY,
                    distanceX: Math.abs(deltaX),
                    distanceY: Math.abs(deltaY);
                
                if ((distanceX >= tiggerThreshold) || (distanceY >= tiggerThreshold)) {
                    e["deltaX"] = deltaX;
                    e["deltaY"] = deltaY;
                    listener.call(elem, e);
                }
            }
        }
    return handlers;
};
