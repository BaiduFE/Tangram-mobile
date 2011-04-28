/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.event;
///import baidu.object.each;

//左右滑动n像素触发swipe事件
baidu.event.swipeTiggerThreshold = 35;
//上下滑动超过n像素不触发swipe事件
baidu.event.swipeCancelThreshold = 70;

/**
 * 触摸滑动事件
 * 对事件对象e扩展三个属性：
 *  direction: {string} left|right  滑动方向
 *  distance: {number} 滑动距离
 *  deltaX: {number}    滑动起始和终点位置差
 *
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.swipe = function (elem, listener) {
    var tiggerThreshold = baidu.event.swipeTiggerThreshold,
        cancelThreshold = baidu.event.swipeCancelThreshold,
        startX, startY,
        deltaX,
        distanceX, distanceY,
        startTime,
        deltaTime,
        touch,
        handlers = {
            touchstart : function (e) {
                touch = e.targetTouches ? e.targetTouches[0] : e;
                startX = touch.pageX;
                startY = touch.pageY;
                startTime = e.timeStamp;
            },
            touchmove: function(e) {
                touch = e.changedTouches ? e.changedTouches[0] : e;
                deltaX = touch.pageX - startX;
                distanceX = Math.abs(deltaX);
                distanceY = Math.abs(touch.pageY - startY);
                deltaTime = e.timeStamp - startTime;
    
                if(distanceX >= 10) {
                    e.preventDefault();
                }
            },
            touchend : function (e) {
                if(distanceX >= tiggerThreshold && distanceY<=cancelThreshold) {
                    e["direction"] = (deltaX < 0) ? 'left' : 'right';
                    e["distance"] = distanceX;
                    e["delta"] = deltaX;
                    listener.call(elem, e);
                }
            }
        }
        
    return handlers;
};
