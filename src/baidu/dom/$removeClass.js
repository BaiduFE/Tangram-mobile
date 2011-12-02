/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 移除目标元素的className
 * @name baidu.dom.removeClass
 * @function
 * @grammar baidu.dom.removeClass(element, className)
 * @param {HTMLElement|string} element 目标元素或
 * @param {string} className 要移除的className，不允许同时移除多个class
 * @remark
 * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
 * @shortcut removeClass
 * @meta standard
 * @see baidu.dom.addClass
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.removeClass = function (element, className) {
    element.className = element.className.replace(new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)', 'g'), ' ').replace(/^\s*|\s*$/g, "");            
    return element;
};

// 声明快捷方法
baidu.removeClass = baidu.dom.removeClass;
