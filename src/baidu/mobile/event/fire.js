/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/event/fire.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/9
 */

///import baidu.mobile.event;
///import baidu.mobile.dom.g;

/**
 * 触发已经注册的事件
 * @name baidu.event.fire
 * @function
 * @grammar baidu.event.fire(element, type, options)
 * @param {HTMLElement|string|window} element 目标元素或目标元素id
 * @param {string} type 事件类型
 * @param {Object} data 数据
 */
baidu.mobile.event.fire = function(element, type, data){
    var event = document.createEvent('HTMLEvents');
    element = baidu.mobile.dom.g(element);
    event.initEvent(type, true, true);
    event.data = data || {};
    
    element.dispatchEvent(event);
};

baidu.mobile.fire = baidu.mobile.event.fire;
