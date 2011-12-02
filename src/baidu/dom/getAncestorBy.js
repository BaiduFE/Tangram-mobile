/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom.g;

/**
 * 获取目标元素符合条件的最近的祖先元素
 * @name baidu.dom.getAncestorBy
 * @function
 * @grammar baidu.dom.getAncestorBy(element, method)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {Function} method 判断祖先元素条件的函数，function (element)
 * @see baidu.dom.getAncestorByTag,baidu.dom.getAncestorByClass
 *             
 * @returns {HTMLElement|null} 符合条件的最近的祖先元素，查找不到时返回null
 */
baidu.dom.getAncestorBy = function (element, method) {
    element = baidu.dom.g(element);

    while ((element = element.parentNode) && element.nodeType == 1) {
        if (method(element)) {
            return element;
        }
    }

    return null;
};
