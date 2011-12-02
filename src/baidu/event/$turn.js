/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.event;

/**
 * 旋转屏幕事件
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.turn = function (elem, listener) {
    var handlers = "onorientationchange" in window ?
    {
        orientationchange : function(e) {
            setTimeout( function() {
                fn(e);
            }, 0);  
        }
    } :
    {
        resize : function(e) {
            setTimeout( function() {
                fn(e);
            }, 200);
        }
    }

    return handlers;
};
