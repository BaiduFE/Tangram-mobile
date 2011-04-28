/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.dom.g;

/**
 * 触发已经注册的事件
 * @name baidu.event.fire
 * @function
 * @grammar baidu.event.fire(element, type, options)
 * @param {HTMLElement|string|window} element 目标元素或目标元素id
 * @param {string} type 事件类型
 * @param {Object} data 数据
 */
baidu.event.fire = function(element, type, data){
    var event = document.createEvent('HTMLEvents');
    element = baidu.dom.g(element);
    event.initEvent(type, true, true);
    event.data = data || {};
    
    element.dispatchEvent(event);
};

baidu.fire = baidu.event.fire;
