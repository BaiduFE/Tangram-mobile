/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom._g;
///import baidu.object.each;
///import baidu.event._listeners;
///import baidu.event.getCompat;

/**
 * 为目标元素移除事件监听器
 * 
 * @param {HTMLElement|string|window} element  目标元素或目标元素id
 * @param {string}                    type     事件类型
 * @param {Function}                listener 事件监听器
 * @return {HTMLElement} 目标元素
 */
baidu.event.un = function(elem, type, listener) {
    elem = baidu.dom._g(elem);
    
    var lis = baidu.event._listeners, 
        len = lis.length,
        isRemoveAll = !listener;
    
    while (len--) {
        item = lis[len];
       
        if (item[1] === type
            && item[0] === elem
            && (isRemoveAll || item[2] === listener)) {
			
            //item[3] is handlers
			if (item[3]) {
				baidu.object.each(item[3], function(evtFunc, evtName) {
					evtName = baidu.event.getCompat(evtName);
					elem.removeEventListener(evtName, evtFunc, false);
				});
			} else {
				elem.removeEventListener(type, listener, false);
			}
	
            lis.splice(len, 1);
        }
    }
    return elem;
};

/**
 * 快捷方法
 */
baidu.un = baidu.event.un;
