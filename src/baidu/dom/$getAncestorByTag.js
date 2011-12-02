/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 获取目标元素指定标签的最近的祖先元素
 * @name baidu.dom.getAncestorByTag
 * @function
 * @grammar baidu.dom.getAncestorByTag(element, tagName)
 * @param {HTMLElement} element 目标元素
 * @param {string} tagName 祖先元素的标签名
 * @see baidu.dom.getAncestorBy,baidu.dom.getAncestorByClass
 *             
 * @returns {HTMLElement|null} 指定标签的最近的祖先元素，查找不到时返回null
 */
baidu.dom.getAncestorByTag = function (element, tagName) {
    tagName = tagName.toUpperCase();

    while ((element = element.parentNode) && element.nodeType == 1) {
        if (element.tagName == tagName) {
            return element;
        }
    }

    return null;
};
