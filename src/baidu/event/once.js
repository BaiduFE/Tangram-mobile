/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event.on;
///import baidu.event.un;
///import baidu.dom.g;

/**
 * 为目标元素添加一次事件绑定
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}      type         事件类型
 * @param {Function}    listener     事件监听器
 * @param {boolean}                compat 桌面浏览器的兼容
 * @return {HTMLElement} 目标元素
 */
baidu.event.once = function(elem, type, listener, compat) {
    elem = baidu.dom.g(elem);
    function onceListener(event){
        listener.call(elem,event);  
        baidu.event.un(elem, type, onceListener);
    } 
    baidu.event.on(elem, type, onceListener, compat);
    return elem;
};

/**
 * 快捷方法
 */
baidu.once = baidu.event.once;
