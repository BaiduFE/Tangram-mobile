/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;

/**
 * 设置目标元素的attribute值
 * @name baidu.dom.setAttr
 * @function
 * @grammar baidu.dom.setAttr(element, key, value)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} key 要设置的attribute键名
 * @param {string} value 要设置的attribute值
 * @remark
 * 
            设置object的自定义属性时，由于浏览器限制，无法设置。
        
 * @shortcut setAttr
 * @meta standard
 * @see baidu.dom.getAttr,baidu.dom.setAttrs
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.setAttr = function (element, key, value) {
    element = baidu.dom.g(element);
	element.setAttribute(key, value);
    return element;
};

// 声明快捷方法
baidu.setAttr = baidu.dom.setAttr;