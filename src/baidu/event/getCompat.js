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

/**
 * 获取兼容的事件名字
 * @private
 */
baidu.event.getCompat = function(elem, evtName) {
    var _compat = {
        "touchstart": {
            name: 'mousedown',
            element: elem
        },
        "touchmove": {
            name: 'mousemove',
            element: document
        },
        "touchend": {
            name: 'mouseup',
            element: elem
        }
    },
    _event = {
        name: evtName,
        element: elem
    };
    
    _event = (baidu.browser.isSupportTouch ? _event : _compat[evtName]) || _event;
    
    return _event;
};
