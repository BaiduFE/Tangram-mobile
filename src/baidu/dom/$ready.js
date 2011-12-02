/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom;

/**
 * 使函数在页面dom节点加载完毕时调用
 * @author walter
 * @name baidu.dom.ready
 * @function
 * @grammar baidu.dom.ready(callback)
 * @param {Function} callback 页面加载完毕时调用的函数.
 * @remark
 * 如果有条件将js放在页面最底部, 也能达到同样效果，不必使用该方法。
 * @meta standard
 */
baidu.ready = baidu.dom.ready = function(callback) {
	document.addEventListener('DOMContentLoaded', callback, false);
};