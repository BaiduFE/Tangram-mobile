/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom.$hasClass;

/**
 * 为目标元素添加className
 * @name baidu.dom.addClass
 * @function
 * @grammar baidu.dom.addClass(element, className)
 * @param {HTMLElement} element 目标元素
 * @param {string} className 要添加的className，允许同时添加多个class，中间使用空白符分隔
 * @remark
 * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
 * @shortcut addClass
 * @meta standard
 * @see baidu.dom.removeClass
 *
 *
 * @returns {HTMLElement} 目标元素
 */
baidu.dom.addClass = function (element, className) {
	if (!baidu.dom.hasClass(element, className)) {
		element.className += (element.className ? ' ' : '') + className;
	}
	return element;
};

// 声明快捷方法
baidu.addClass = baidu.dom.addClass;