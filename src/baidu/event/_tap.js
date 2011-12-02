/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event.getTouchInfo;
///import baidu.browser.isSupportTouch;
///import baidu.browser.android;

baidu.event.CANCLE_TAP = "_tgEvtCancleTap";
baidu.event.TAP_LAST_TIME = "_tgEvtTapLastTime";

 /**
 * 触摸的单击和双击事件处理函数
 * 
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @param {string}       type  事件类型，分tap与dbtap
 * @param {string}       dbtapThreshold   双击时间间隔
 */
baidu.event._tap = function (elem, listener, type, dbtapThreshold) {
    var startTime,
        isCancel,
        touch,
        CANCLE_TAP = baidu.event.CANCLE_TAP,
        TAP_LAST_TIME = baidu.event.TAP_LAST_TIME,
        isSupportTouch = baidu.browser.isSupportTouch,
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
                if(isSupportTouch){
                    isCancel = true;
                }
                touch = baidu.event.getTouchInfo(e);
            },
            
            touchend : function (e) {
                if (!isCancel) {
                    if (type == "dbtap") {
                        if (elem[TAP_LAST_TIME] && e.timeStamp - elem[TAP_LAST_TIME] <= dbtapThreshold) {
                            listener.call(elem, e);
                            e.preventDefault();
                            elem[CANCLE_TAP] = true;
                            elem[TAP_LAST_TIME] = 0;
                        } else {
                            elem[TAP_LAST_TIME] = e.timeStamp;
                        }
                    } else {
                        
                        //setTimeout为了延迟到dbtap结束后(设置了flag后)再执行，
                        setTimeout(function() {
                            if (elem[CANCLE_TAP] === true) {
                                elem[CANCLE_TAP] = false;
                            } else {
                                listener.call(elem, touch, e);
                            }
                        }, 0);
                    }
                }
            }
        };
    return handlers;
};
