/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;

/**
 * 触发事件
 * @public
 * @param {String} eventName   要触发的事件名称
 * @param {Object} e           事件event
 */
baidu.ui.Base.prototype.fire = function(eventType,e) {
	this.dispatchEvent(eventType.toLowerCase(), {
		e: e
	});
};