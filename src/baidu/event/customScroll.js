/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.event.on;

 /**
 * 屏幕滚动事件
 *       事件对象增加一个属性：scrollType = "scrollstart" | "scrollstop"
 * @param {HTMLelem} elem  目标元素，通常是document
 * @param {Function}   listener 事件监听器
 */
baidu.event.customScroll = function (elem, listener) {
    var scrolling = false,
        timeId = 0,
    
        func = function(e) {
            if (!scrolling) {
                scrolling = true;
                e.scrollType = "scrollstart";
                listener.call(elem, e);
            }
            clearTimeout(timeId);
            timeId = setTimeout(function(){
                e.scrollType = "scrollstop";
                listener.call(elem, e);
                scrolling = false;
            }, 100);
        },
        
        handlers = {
            touchmove : func,
            scroll : func
        }
    return handlers;
}
