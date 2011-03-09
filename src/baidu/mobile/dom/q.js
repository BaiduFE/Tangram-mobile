/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 *
 * path: baidu/mobile/dom/q.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */
///import baidu.mobile.dom;

/**
 * 通过className获取元素
 * @name baidu.mobile.dom.q
 * @function
 * @grammar baidu.mobile.dom.q(className[, element, tagName])
 * @param {string} className 元素的class，只能指定单一的class，如果为空字符串或者纯空白的字符串，返回空数组。
 * @param {string|HTMLElement} [element] 开始搜索的元素，默认是document。
 * @param {string} [tagName] 要获取元素的标签名，如果没有值或者值为空字符串或者纯空白的字符串，表示不限制标签名。
 * @remark 不保证返回数组中DOM节点的顺序和文档中DOM节点的顺序一致。
 * @shortcut q,Q
 * @meta standard
 * @see baidu.mobile.dom.g
 *
 * @returns {Array} 获取的元素集合，查找不到或className参数错误时返回空数组.
 */
baidu.mobile.dom.q = function(className, element, tagName){
    var result = [], elements;
    
    if (!(className = trim(className))) {
        return result;
    }
    
    // 初始化element参数
    if ('undefined' == typeof element) {
        element = document;
    }
    else {
        element = baidu.mobile.dom.g(element);
        if (!element) {
            return result;
        }
    }
    
    // 初始化tagName参数
    tagName && (tagName = baidu.mobile.string.trim(tagName).toUpperCase());
    
    elements = element.getElementsByClassName(className);
    for (var i = 0, l = elements.length; i < l; i++) {
        var node = elements[i];
        if (tagName && node.tagName != tagName) {
            continue;
        }
        result.push(node);
    }
    
    return result;
};

baidu.mobile.q = baidu.mobile.Q = baidu.mobile.dom.q
