/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 从DOM树上移除目标元素
 * @name baidu.dom.remove
 * @function
 * @grammar baidu.dom.remove(element)
 * @param {HTMLElement} element 需要移除的元素
 * @remark
 * @meta standard
 */
baidu.dom.remove = function (element) {
    element.parentNode.removeChild(element);
};
