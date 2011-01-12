/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/event/_customEvent/dbtap.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event._customEvent;
///import baidu.mobile.event._customEvent.tap;

//双击时间间隔
baidu.mobile.event.dbtapThreshold = 250;

 /**
 * 触摸双击事件接口
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.mobile.event._customEvent.dbtap = function (elem, listener) {
    return baidu.mobile.event._customEvent._tap(elem, listener, "dbtap", baidu.mobile.event.dbtapThreshold);
};