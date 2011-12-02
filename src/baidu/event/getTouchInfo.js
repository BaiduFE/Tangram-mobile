/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.event;

/**
 * 获取触摸信息
 * @param {Object} e 事件对象
 * @return {Object} 触摸信息对象
 */
baidu.event.getTouchInfo = function(e){
    var touch = e.targetTouches ? e.targetTouches[0] : e;
    return {
        pageX: touch.pageX,
        pageY: touch.pageY
    };
};
