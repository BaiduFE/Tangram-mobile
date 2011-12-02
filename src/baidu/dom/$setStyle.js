/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 设置目标元素的style样式值
 * @name baidu.dom.setStyle
 * @function
 * @grammar baidu.dom.setStyle(element, key, value)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要设置的样式名
 * @param {string} value 要设置的样式值
 * @remark
 * @shortcut setStyle
 * @meta standard
 * @see baidu.dom.getStyle,baidu.dom.setStyles
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.setStyle = function (element, key, value) {
	element.style[key] = value
    return element;
};

// 声明快捷方法
baidu.setStyle = baidu.dom.setStyle;
