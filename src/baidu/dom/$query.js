/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 提供css选择器功能
 * @name baidu.dom.query
 * @function
 * @grammar baidu.dom.query(selector[, context, results])
 * @param {String} selector 选择器定义
 * @param {HTMLElement | DOMDocument} [context] 查找的上下文
 * @param {Array} [results] 查找的结果会追加到这个数组中
 * @version 1.2
 * @remark
 *
 选择器采用webkit原生支持 querySelectorAll
 * @see baidu.dom.g, baidu.dom.q, baidu.dom.query.matches
 *
 * @returns {Array}        包含所有筛选出的DOM元素的数组
 */

baidu.dom.query = function(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector), 0);
};

baidu.query = baidu.dom.query;

