/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.browser.isSupportTouch;
///import baidu.browser.android;

 /**
 * 触摸单击事件接口
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.tap = function (elem, listener) {
    var isCancel,
        handlers = {
            touchstart : function (e) {
                isCancel = false;
                if(baidu.browser.android < 2.1) {
					e.preventDefault();
				}
            },
            
            touchmove : function (e) {
                if(baidu.browser.isSupportTouch){
                    isCancel = true;
                }
            },
            
            touchend : function (e) {
                if (!isCancel) {
                    //setTimeout为了延迟到dbtap结束后(设置了flag后)再执行，
                    setTimeout(function() {
                        if (elem['_tgEvtCancleTap'] === true) {
                            elem['_tgEvtCancleTap'] = false;
                        } else {
                            listener.call(elem, e);
                        }
                    }, 0);
                }
            }
        };
    return handlers;
};
