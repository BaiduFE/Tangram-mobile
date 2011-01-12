/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/event/getCompat.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event;
///import baidu.mobile.browser.isSupportTouch;

/**
 * 事件转换hash表
 * 给_bind _unbind使用，为了兼容不支持touch的机器
 * @private
*/
baidu.mobile.event._compat = {
    "touchstart" : "mousedown",
    "touchmove" : "mousemove",
    "touchend" : "mouseup"
}

/**
 * 获取兼容的事件名字
 * @private
*/
baidu.mobile.event.getCompat = function(evtName) {
	return baidu.mobile.browser.isSupportTouch ? 
				evtName :
				baidu.mobile.event._compat[evtName];
};