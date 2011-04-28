/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.event.on

//按下n毫秒触发taphold事件
baidu.event.tapholdThreshold = 600;

 /**
 * 触摸长按事件
 * 
 * @param {HTMLelement} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.taphold = function (elem, listener) {
    var 
        tapholdThreshold = baidu.mobile.event.tapholdThreshold,
        timeout,
        clearFn = function (e) {
            clearTimeout(timeout);
        },
        handlers = {
            touchstart : function (e) {
                //两个以上手指接触取消事件
                if (e.touches && e.touches.length > 1) {
                    clearTimeout(timeout);
                    return;
                }
                var touch = e.targetTouches ? e.targetTouches[0] : e;
                timeout = setTimeout(function(){
                    listener.call(elem, e);
                    if (baidu.mobile.event.CANCLE_TAP) {
                        elem[baidu.mobile.event.CANCLE_TAP] = true;
                    }
                }, tapholdThreshold);
            },
            touchmove : clearFn,
            touchend : clearFn
        }
    return handlers;
};
