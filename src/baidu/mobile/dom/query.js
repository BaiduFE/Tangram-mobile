/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/query.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */


///import baidu.mobile.dom;

/**
 * 提供css选择器功能
 * @name baidu.mobile.dom.query
 * @function
 * @grammar baidu.mobile.dom.query(selector[, context, results])
 * @param {String} selector 选择器定义
 * @param {HTMLElement | DOMDocument} [context] 查找的上下文
 * @param {Array} [results] 查找的结果会追加到这个数组中
 * @version 1.2
 * @remark
 * 
            选择器采用webkit原生支持 querySelectorAll
 * @see baidu.mobile.dom.g, baidu.mobile.dom.q, baidu.mobile.dom.query.matches
 *             
 * @returns {Array}        包含所有筛选出的DOM元素的数组
 */

baidu.mobile.query = baidu.mobile.dom.query = function(selector, context){
    if (typeof document.querySelectorAll === 'function') {
        return ((!!context) ? context : document).querySelectorAll(selector);
    }
    else {
        return null;
    }
};
