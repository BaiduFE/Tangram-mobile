/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.event.tap;

//双击时间间隔
baidu.event.dbtapThreshold = 250;

 /**
 * 触摸双击事件接口
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.dbtap = function (elem, listener) {
    return baidu.event._tap(elem, listener, "dbtap", baidu.event.dbtapThreshold);
};
