/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 判断元素是否拥有指定的className
 * @name baidu.dom.hasClass
 * @function
 * @grammar baidu.dom.hasClass(element, className)
 * @param {HTMLElement} element 目标元素
 * @param {string} className 要判断的className，不可以是用空格拼接的多个className
 * @version 1.2
 * @remark
 * 对于参数className，不支持空格分隔的多个className
 * @see baidu.dom.addClass, baidu.dom.removeClass
 * @meta standard
 * @returns {Boolean} 是否拥有指定的className，如果要查询的classname不在元素的className中，返回false
 */
baidu.dom.hasClass = function (element, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(element.className);
};
