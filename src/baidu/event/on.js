/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event._listeners;
///import baidu.event.getCompat;
///import baidu.dom.g;
///import baidu.object.each;

/**
 * 为目标元素添加事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {function}                listener 事件监听器
 * @return {HTMLElement} 目标元素
 */
baidu.event.on = function(elem, type, listener) {
    elem = baidu.dom.g(elem);
   
    var customEvent = baidu.event,
        handlers,
        _bind = function(elem, evtName, evtFunc){
            var _event = customEvent.getCompat(elem, evtName);
            _event.element.addEventListener(_event.name, evtFunc, false);
        };
        
    if (customEvent && customEvent[type]) {
        handlers = customEvent[type](elem, listener);
        baidu.object.each(handlers, function(evtFunc, evtName) {
            _bind(elem, evtName, evtFunc);
        });
    } else {
		_bind(elem, type, listener);
    }
    
    customEvent._listeners.push([elem, type, listener, handlers]);
    return elem;
};

/**
 * 快捷方法
 */
baidu.on = baidu.event.on;
