/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.lang.isFunction;
///import baidu.lang.isString;

/**
 * 移除对象的事件监听器
 * @grammar obj.removeEventListener(type, handler)
 * @param {string}   type     事件类型
 * @param {Function|string} handler  要移除的事件监听函数或者监听函数的key
 * @remark 	如果第二个参数handler没有被绑定到对应的自定义事件中，什么也不做。
 */
baidu.ui.Base.prototype.removeEventListener = function (type, handler) {
    if (typeof handler != "undefined") {
        if ( (baidu.lang.isFunction(handler) && ! (handler = handler.hashCode))
            || (! baidu.lang.isString(handler))
        ){
            return;
        }
    }

    !this.__listeners && (this.__listeners = {});

    type.indexOf("on") != 0 && (type = "on" + type);

    var t = this.__listeners;
    if (!t[type]) {
        return;
    }
    if (typeof handler != "undefined") {
        t[type][handler] && delete t[type][handler];
    } else {
        for(var guid in t[type]){
            delete t[type][guid];
        }
    }
};