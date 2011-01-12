/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/event/on.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.dom._g;
///import baidu.object.each;

///import baidu.mobile.event;
///import baidu.mobile.event._listeners;
///import baidu.mobile.event.getCompat;

/**
 * 为目标元素添加事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {function}                listener 事件监听器
 * @param {boolean}                noCompat 取消对桌面浏览器的兼容
 * @return {HTMLElement} 目标元素
 */
baidu.mobile.event.on = function(elem, type, listener, noCompat) {
    elem = baidu.dom._g(elem);
    var customEvent = baidu.mobile.event._customEvent,
        handlers;
    if (customEvent && customEvent[type]) {
        handlers = customEvent[type](elem, listener);
        baidu.object.each(handlers, function(evtFunc, evtName) {
            evtName = noCompat ? evtName : baidu.mobile.event.getCompat(evtName);
            elem.addEventListener(evtName, evtFunc, false);
        });
        
    } else {
		var type = noCompat ? type : baidu.mobile.event.getCompat(type);
        elem.addEventListener(type, listener, false);
    }
    
    baidu.mobile.event._listeners.push([elem, type, listener, handlers]);
    return elem;
};

/**
 * 快捷方法
 */
baidu.mobile.on = baidu.mobile.event.on;