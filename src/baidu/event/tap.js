/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/event/tap.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
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