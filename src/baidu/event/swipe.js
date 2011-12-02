/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.event.getTouchInfo;
///import baidu.object.each;
///import baidu.browser.android;

//左右滑动n像素触发swipe事件
baidu.event.swipeTiggerThreshold = 20;

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
        startX, startY,
        deltaX,
        distanceX, distanceY,
        startTime,
        deltaTime,
        touch,
        handlers = {
            touchstart : function (e) {
                touch = baidu.event.getTouchInfo(e);
                startX = touch.pageX;
                startY = touch.pageY;
                startTime = e.timeStamp;
                
				if(baidu.browser.android < 2.1) {
					e.preventDefault();
				}
            },
            touchmove: function(e) {
                touch = baidu.event.getTouchInfo(e);
                deltaX = touch.pageX - startX;
                distanceX = Math.abs(deltaX);
                distanceY = Math.abs(touch.pageY - startY);
                deltaTime = e.timeStamp - startTime;
    
                if(distanceX >= 10) {
                    e.preventDefault();
                }
            },
            touchend : function (e) {
                if(distanceX >= tiggerThreshold || distanceX/deltaTime >= 0.36) {
                    touch["direction"] = (deltaX < 0) ? 'left' : 'right';
                    touch["distance"] = distanceX;
                    touch["delta"] = deltaX;
                    listener.call(elem, touch, e);
                }
                distanceX = 0;
                distanceY = 0;
            }
        }
        
    return handlers;
};
