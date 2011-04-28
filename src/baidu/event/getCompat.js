/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.browser.isSupportTouch;

/**
 * 事件转换hash表
 * 给_bind _unbind使用，为了兼容不支持touch的机器
 * @private
*/
baidu.event._compat = {
    "touchstart" : "mousedown",
    "touchmove" : "mousemove",
    "touchend" : "mouseup"
}

/**
 * 获取兼容的事件名字
 * @private
*/
baidu.event.getCompat = function(evtName) {
	return baidu.browser.isSupportTouch ? 
				evtName :
				baidu.event._compat[evtName];
};
