/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/hasClass.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import  baidu.dom.hasClass;

/**
 * 判断元素是否拥有指定的className
 * @name baidu.mobile.dom.hasClass
 * @function
 * @grammar baidu.mobile.dom.hasClass(element, className)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} className 要判断的className，可以是用空格拼接的多个className
 * @version 1.2
 * @remark
 * 对于参数className，支持空格分隔的多个className
 * @see baidu.mobile.dom.addClass, baidu.mobile.dom.removeClass
 *             
 * @returns {Boolean} 是否拥有指定的className，如果要查询的classname有一个或多个不在元素的className中，返回false
 */
baidu.mobile.dom.hasClass = baidu.dom.hasClass;
