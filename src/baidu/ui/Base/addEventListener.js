/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.lang.guid;
///import baidu.lang.isFunction;

/**
 * 注册对象的事件监听器。
 * @grammar obj.addEventListener(type, handler[, key])
 * @param 	{string}   type         自定义事件的名称
 * @param 	{Function} handler      自定义事件被触发时应该调用的回调函数
 * @param 	{string}   [key]		为事件监听函数指定的名称，可在移除时使用。如果不提供，方法会默认为它生成一个全局唯一的key。
 * @remark 	事件类型区分大小写。如果自定义事件名称不是以小写"on"开头，该方法会给它加上"on"再进行判断，即"click"和"onclick"会被认为是同一种事件。 
 */
baidu.ui.Base.prototype.addEventListener = function (type, handler, key) {
    if (!baidu.lang.isFunction(handler)) {
        return;
    }

    !this.__listeners && (this.__listeners = {});

    var t = this.__listeners, id;
    if (typeof key == "string" && key) {
        if (/[^\w\-]/.test(key)) {
            throw("nonstandard key:" + key);
        } else {
            handler.hashCode = key; 
            id = key;
        }
    }
    type.indexOf("on") != 0 && (type = "on" + type);

    typeof t[type] != "object" && (t[type] = {});
    id = id || baidu.lang.guid();
    handler.hashCode = id;
    t[type][id] = handler;
};