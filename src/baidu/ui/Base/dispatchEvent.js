/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.lang.isString;

/**
 * 
 * @class   自定义的事件对象。
 * @name 	baidu.lang.Event
 * @grammar baidu.lang.Event(type[, target])
 * @param 	{string} type	 事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以"on"(小写)开头。
 * @param 	{Object} [target]触发事件的对象
 * @meta standard
 * @remark 引入该模块，会自动为Class引入3个事件扩展方法：addEventListener、removeEventListener和dispatchEvent。
 * @meta standard
 * @see baidu.lang.Class
 */
baidu.lang.Event = function (type, target) {
    this.type = type;
    this.returnValue = true;
    this.target = target || null;
    this.currentTarget = null;
};

/**
 * 派发自定义事件，使得绑定到自定义事件上面的函数都会被执行。
 * @grammar obj.dispatchEvent(event, options)
 * @param {baidu.lang.Event|String} event 	Event对象，或事件名称(1.1.1起支持)
 * @param {Object} 					options 扩展参数,所含属性键值会扩展到Event对象上(1.2起支持)
 * @remark 处理会调用通过addEventListenr绑定的自定义事件回调函数之外，还会调用直接绑定到对象上面的自定义事件。例如：<br>
myobj.onMyEvent = function(){}<br>
myobj.addEventListener("onMyEvent", function(){});
 */
baidu.ui.Base.prototype.dispatchEvent = function (event, options) {
    if (baidu.lang.isString(event)) {
        event = new baidu.lang.Event(event);
    }
    !this.__listeners && (this.__listeners = {});

    // 20100603 添加本方法的第二个参数，将 options extend到event中去传递
    options = options || {};
    for (var i in options) {
        event[i] = options[i];
    }

    var i, t = this.__listeners, p = event.type;
    event.target = event.target || this;
    event.currentTarget = this;

    p.indexOf("on") != 0 && (p = "on" + p);

    baidu.lang.isFunction(this[p]) && this[p].apply(this, arguments);

    if (typeof t[p] == "object") {
        for (i in t[p]) {
            t[p][i].apply(this, arguments);
        }
    }
    return event.returnValue;
};