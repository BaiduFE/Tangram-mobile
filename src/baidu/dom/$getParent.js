/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 获得元素的父节点
 * @name baidu.dom.getParent
 * @function
 * @grammar baidu.dom.getParent(element)
 * @param {HTMLElement} element   目标元素
 * @return {HTMLElement|null} 父元素，如果找不到父元素，返回null
 */
baidu.dom.getParent = function (element) {
	return  element.parentNode || null;
};
