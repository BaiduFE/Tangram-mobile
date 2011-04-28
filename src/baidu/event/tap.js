/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.event._tap;

        
 /**
 * 触摸单击事件接口
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.tap = function (elem, listener) {
    return baidu.event._tap(elem, listener, "tap");
};
