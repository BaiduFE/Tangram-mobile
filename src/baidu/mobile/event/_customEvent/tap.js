/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/event/_customEvent/tap.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event._customEvent;
///import baidu.mobile.event._customEvent._tap;

        
 /**
 * 触摸单击事件接口
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.mobile.event._customEvent.tap = function (elem, listener) {
    return baidu.mobile.event._customEvent._tap(elem, listener, "tap");
};