/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.event._listeners;
///import baidu.event.getCompat;
///import baidu.dom._g;
///import baidu.object.each;

/**
 * 为目标元素添加事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {function}                listener 事件监听器
 * @param {boolean}                compat 桌面浏览器的兼容
 * @return {HTMLElement} 目标元素
 */
baidu.event.on = function(elem, type, listener, compat) {
    elem = baidu.dom._g(elem);
   
    var customEvent = baidu.event,
        handlers;
    if (customEvent && customEvent[type]) {
        handlers = customEvent[type](elem, listener);
        baidu.object.each(handlers, function(evtFunc, evtName) {
            evtName = compat ? baidu.event.getCompat(evtName) : evtName;
            elem.addEventListener(evtName, evtFunc, false);
        });
        
    } else {
		var type = compat ?  baidu.event.getCompat(type) : type;
        elem.addEventListener(type, listener, false);
    }
    
    baidu.event._listeners.push([elem, type, listener, handlers]);
    return elem;
};

/**
 * 快捷方法
 */
baidu.on = baidu.event.on;
