/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;
///import baidu.browser.isSupportTouch;

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
    var 
        startTime,
        isCancel,
        CANCLE_TAP = baidu.event.CANCLE_TAP,
        TAP_LAST_TIME = baidu.event.TAP_LAST_TIME,
        isSupportTouch = baidu.browser.isSupportTouch,
        
        handlers = {
            touchstart : function (e) {
                var touch = e.targetTouches ? e.targetTouches[0] : e;
                isCancel = false;
                startTime = e.timeStamp;
            },
            
            touchmove : function (e) {
                if(isSupportTouch){
                    isCancel = true;
                }
            },
            
            touchend : function (e) {
                if (!isCancel) {
                    if (type == "dbtap") {
                        if (elem[TAP_LAST_TIME] && e.timeStamp - elem[TAP_LAST_TIME] <= dbtapThreshold) {
                            fn.call(elem, e);
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
                                listener.call(elem, e);
                            }
                        }, 0);
                    }
                }
            }
        }
    return handlers;
};
