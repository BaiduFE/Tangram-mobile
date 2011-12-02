/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.lang.isString;
///import baidu.event.on;

/**
 * 为目标元素添加事件监听器
 *
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {function}                  listener 事件监听器
 * @param {args* 0..n}                args 函数执行时附加到执行时函数前面的参数
 * @return {HTMLElement} 目标元素
 */
baidu.ui.Base.prototype.on = function(elem, type, listener) {
	if(baidu.lang.isString(listener) && !this[listener]) {
		return null;
	}

	var me = this,
	xargs = arguments.length > 3 ? [].slice.call(arguments, 3) : null,
	handler = function () {
		var fn = baidu.lang.isString(listener) ? me[listener] : listener,
		args = (xargs) ? xargs.concat([].slice.call(arguments, 0)) : arguments;
		return fn.apply(me, args);
	};
	baidu.event.on(elem, type, handler);
}