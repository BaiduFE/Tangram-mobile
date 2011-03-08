/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/removeClass.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.removeClass;

/**
 * 移除目标元素的className
 * @name baidu.mobile.dom.removeClass
 * @function
 * @grammar baidu.mobile.dom.removeClass(element, className)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} className 要移除的className，允许同时移除多个class，中间使用空白符分隔
 * @remark
 * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
 * @shortcut removeClass
 * @meta standard
 * @see baidu.mobile.dom.addClass
 *             
 * @returns {HTMLElement} 目标元素
 */
baidu.mobile.dom.removeClass = baidu.mobile.removeClass = baidu.dom.removeClass;
