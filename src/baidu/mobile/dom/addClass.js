/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/addClass.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.addClass;

/**
 * 为目标元素添加className
 * @name baidu.mobile.dom.addClass
 * @function
 * @grammar baidu.mobile.dom.addClass(element, className)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {string} className 要添加的className，允许同时添加多个class，中间使用空白符分隔
 * @remark
 * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
 * @shortcut addClass
 * @meta standard
 * @see baidu.mobile.dom.removeClass
 * 	
 * 	            
 * @returns {HTMLElement} 目标元素
 */
baidu.mobile.addClass = baidu.mobile.dom.addClass = baidu.dom.addClass;

