/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 删除元素的某个样式
 * @name baidu.dom.removeStyle
 * @function
 * @grammar baidu.dom.removeStyle(element, styleName)
 * @param {HTMLElement|String} element 需要删除样式的元素
 * @param {string} styleName 需要删除的样式名字
 * @version 1.3
 * @see baidu.dom.setStyle
 *
 * @returns {HTMLElement} 目标元素
 */

baidu.dom.removeStyle = function (element, st) {
	element.style.removeProperty(st);
	return element;
};