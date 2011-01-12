/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/event/once.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event.on;
///import baidu.mobile.event.un;
///import baidu.dom.g;

/**
 * 为目标元素添加一次事件绑定
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}      type         事件类型
 * @param {Function}    listener     事件监听器
 * @return {HTMLElement} 目标元素
 */
baidu.mobile.event.once = function(elem, type, listener) {
    elem = baidu.dom.g(elem);
    function onceListener(event){
        listener.call(elem,event);  
        baidu.mobile.event.un(elem, type, onceListener);
    } 
    baidu.mobile.event.on(elem, type, onceListener);
    return elem;
};

/**
 * 快捷方法
 */
baidu.mobile.once = baidu.mobile.event.once;