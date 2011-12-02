/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;

/**
 * 从DOM树上移除目标元素
 * @name baidu.dom.remove
 * @function
 * @grammar baidu.dom.remove(element)
 * @param {HTMLElement|string} element 需要移除的元素或元素的id
 * @remark
 * @meta standard
 */
baidu.dom.remove = function (element) {
    element = baidu.dom.g(element);
	var tmpEl = element.parentNode;
    tmpEl && tmpEl.removeChild(element);
};
