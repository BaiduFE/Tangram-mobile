/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;
///import baidu.string.toCamelCase;
///import baidu.dom.getComputedStyle;

/**
 * 获取目标元素的样式值
 * @name baidu.dom.getStyle
 * @function
 * @grammar baidu.dom.getStyle(element, key)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要获取的样式名
 * @remark	
 * @shortcut getStyle
 * @meta standard
 * @see baidu.dom.setStyle,baidu.dom.setStyles
 *             
 * @returns {string} 目标元素的样式值
 */

baidu.dom.getStyle = function (element, key) {
    element = baidu.dom.g(element);
    key = baidu.string.toCamelCase(key);
    return element.style[key] || baidu.dom.getComputedStyle(element, key);
};

// 声明快捷方法
baidu.getStyle = baidu.dom.getStyle;
