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
    context = context || document;
    var ret = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(selector);

    function makeArray(array) {
        return Array.prototype.slice.call(array, 0);
    }

    if(ret) { //对只选择tag、className、id的情况进行优化
        if(ret[1]) {
            return makeArray(context.getElementsByTagName(selector));
        } else if(ret[2]) {
            return makeArray(context.getElementsByClassName(ret[2]));
        } else if(ret[3]) {
            return [document.getElementById(ret[3])];
        }
    } else {
        if(context.nodeType === 1) {
            //添加局部选择器
            var oldContext = context,
            id = context.getAttribute("id"),
            newid = id || '__tangram_mobile__';

            (!id) && context.setAttribute( "id", newid );

            try {
                selector = "[id='" + newid + "'] " + selector;
                return makeArray((context.parentNode).querySelectorAll(selector));
            } finally {
                (!id) && oldContext.removeAttribute("id");
            }
        } else if(context.nodeType === 9) {
            return makeArray(context.querySelectorAll(selector));
        }

    }
};

baidu.query = baidu.dom.query;

