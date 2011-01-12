/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/event/_customEvent/swipe.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event._customEvent;
///import baidu.mobile.event.on
///import baidu.object.each;

//左右滑动n像素触发swipe事件
baidu.mobile.event.swipeTiggerThreshold = 70;
//上下滑动超过n像素不触发swipe事件
baidu.mobile.event.swipeCancelThreshold = 50;


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
baidu.mobile.event._customEvent.swipe = function (elem, listener) {
    var 
        tiggerThreshold = baidu.mobile.event.swipeTiggerThreshold,
        cancelThreshold = baidu.mobile.event.swipeCancelThreshold,
        startX, startY, startPageY,
        startTime,
        lock,
        handlers = {
            touchstart : function (e) {
                //两个以上手指接触时不触发swipe事件
                lock = (e.touches && e.touches.length > 1);
                var touch = e.targetTouches ? e.targetTouches[0] : e;
                startX = touch.pageX;
                startY = touch.pageY;
                startPageY = window.pageYOffset;
                startTime = e.timeStamp;
            },
            touchend : function (e) {
                if (lock) return;
                var touch = e.changedTouches ? e.changedTouches[0] : e,
                    isHori = Math.abs(touch.pageX - startX) >= tiggerThreshold 
                             && Math.abs(touch.pageY - startY) <= cancelThreshold
                             && Math.abs(window.pageYOffset - startPageY) <= cancelThreshold,
                    isVert = Math.abs(touch.pageY - startY) >= tiggerThreshold
                             && Math.abs(touch.pageX - startX) <= cancelThreshold;
                
                if (isHori || isVert) {
                    var delta = isHori ? touch.pageX - startX : touch.pageY - startY;
                    e["direction"] = isHori ? ((delta < 0) ? 'left' : 'right') : ((delta < 0) ? 'up' : 'down');
                    e["distance"] = Math.abs(delta);
                    e["delta"] = delta;
                    listener.call(elem, e);
                }
            }
        }
    return handlers;
};