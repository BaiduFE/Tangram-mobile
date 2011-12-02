/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;

/**
 *
 * @name baidu.dom.getComputedStyle
 * @function
 * @grammar baidu.dom.getComputedStyle(element, key)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要获取的样式名
 *
 * @see baidu.dom.getStyle
 *             
 * @returns {string} 目标元素的computed style值
 */

baidu.dom.getComputedStyle = function(element, key){
    element = baidu.dom.g(element);
    return document.defaultView.getComputedStyle(element, null).getPropertyValue(key);
};
