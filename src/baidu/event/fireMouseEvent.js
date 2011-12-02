/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.event;
///import baidu.dom.g;
///import baidu.object.extend;

/**
 * 触发已经注册的事件
 * @name baidu.event.fireMouseEvent
 * @function
 * @grammar baidu.event.fireMouseEvent(element, type, options)
 * @param {HTMLElement|string|window} element 目标元素或目标元素id
 * @param {string} type 事件类型
 * @param {Object} options 触发的选项

 * @param {Boolean} options.bubbles 是否冒泡
 * @param {Boolean} options.cancelable 是否可以阻止事件的默认操作
 * @param {window|null} options.view 指定 Event 的 AbstractView
 * @param {1|Number} options.detail 指定 Event 的鼠标单击量
 * @param {Number} options.screenX 指定 Event 的屏幕 x 坐标
 * @param {Number} options.screenY number 指定 Event 的屏幕 y 坐标
 * @param {Number} options.clientX 指定 Event 的客户端 x 坐标
 * @param {Number} options.clientY 指定 Event 的客户端 y 坐标
 * @param {Boolean} options.ctrlKey 指定是否在 Event 期间按下 ctrl 键
 * @param {Boolean} options.altKey 指定是否在 Event 期间按下 alt 键
 * @param {Boolean} options.shiftKey 指定是否在 Event 期间按下 shift 键
 * @param {Boolean} options.metaKey 指定是否在 Event 期间按下 meta 键
 * @param {Number} options.button 指定 Event 的鼠标按键
 * @param {HTMLElement} options.relatedTarget 指定 Event 的相关 EventTarget
 * @version 1.3
 *
 * @returns {HTMLElement} 目标元素
 */
baidu.event.fireMouseEvent = function(element, type, options) {
	var ev = document.createEvent('MouseEvents');
	
	element = baidu.dom.g(element);
	type = type.replace(/^on/i, "");

	options = baidu.object.extend({
		bubbles : true,
		cancelable : true,
		view : window,
		detail : 1,
		screenX : 0,
		screenY : 0,
		clientX : 0,
		clientY : 0,
		ctrlKey : false,
		altKey  : false,
		shiftKey: false,
		metaKey : false,
		button  : 0,
		relatedTarget : null
	}, options);

	ev.initMouseEvent(type, options.bubbles, options.cancelable, optinos.view, options.detail,
	optinos.screenX, optinos.screenY, optinos.clientX, optinos.clientY, optinos.ctrlKey, optinos.altKey,
	optinos.shiftKey, optinos.metaKey, options.button, options.relatedTarget);

	if (type.search(/^touch/) !== -1) {
		ev.pageX = ev.clientX;
		ev.pageY = ev.clientY;
		ev.touches = [ev];	
	}
	
	element.dispatchEvent(ev);
};