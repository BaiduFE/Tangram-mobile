/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/dom/toggleClass.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.dom;
///import baidu.dom.toggleClass;

/**
 * 添加或者删除一个节点中的指定class，如果已经有就删除，否则添加
 * @name baidu.mobile.dom.toggleClass
 * @function
 * @grammar baidu.mobile.dom.toggleClass(element, className)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {String} className 指定的className。允许同时添加多个class，中间使用空白符分隔
 * @version 1.3
 * @remark
 * 
 * 传入多个class时，只要其中有一个class不在当前元素中，则添加所有class，否则删除所有class。
 */
baidu.mobile.dom.toggleClass = baidu.dom.toggleClass;