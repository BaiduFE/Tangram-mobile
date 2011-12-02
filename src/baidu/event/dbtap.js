/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.event.getTouchInfo;
///import baidu.browser.isSupportTouch;
///import baidu.browser.android;

//双击时间间隔
baidu.event.dbtapThreshold = 250;

/**
 * 触摸双击事件接口
 *
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.dbtap = function (elem, listener) {
	var startTime,
		isCancel,
		touch,
		dbtapThreshold = baidu.event.dbtapThreshold,
		handlers = {
			touchstart : function (e) {
				touch = baidu.event.getTouchInfo(e);
				isCancel = false;
				startTime = e.timeStamp;
	
				if(baidu.browser.android < 2.1) {
					e.preventDefault();
				}
			},
			touchmove : function (e) {
				if(baidu.browser.isSupportTouch) {
					isCancel = true;
				}
				touch = baidu.event.getTouchInfo(e);
			},
			touchend : function (e) {
				if (!isCancel) {
					if (elem['_tgEvtTapLastTime'] && (e.timeStamp - elem['_tgEvtTapLastTime'] <= dbtapThreshold)) {
						listener.call(elem, touch, e);
						e.preventDefault();
						elem['_tgEvtCancleTap'] = true;
						elem['_tgEvtTapLastTime'] = 0;
					} else {
						elem['_tgEvtTapLastTime'] = e.timeStamp;
					}
				}
			}
	};
	return handlers;
};