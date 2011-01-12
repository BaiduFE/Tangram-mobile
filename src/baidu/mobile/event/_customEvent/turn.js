/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/event/_customEvent/turn.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event._customEvent;
///import baidu.mobile.event.on

 /**
 * 旋转屏幕事件
 * 对事件对象e扩展一个属性：
 *  turned: {boolean} true为横屏，false为竖屏
 *
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.mobile.event._customEvent.turn = function (elem, listener) {
    if (elem != window) {
        throw new Error("turn event must be bind in window");
    }
    //Android2.1以下版本不支持orientationchange事件，用resize模拟
    var handlers = "orientation" in window ? 
        {
            orientationchange : function(e) {
                switch(window.orientation) {
                    case 0:
                    case 180:
                        e.turned = false;
                        break;
                    case 90:
                    case -90:
                        e.turned = true;
                        break;
                }
                //android2.2会在旋转屏幕之前触发这个事件，通过setTimeout修复
                setTimeout(function(){
                    listener.call(elem, e);
                }, 0);
            }
        } :
        {
            //todo: 找android2.1以下的机器测试
            resize : function(e) {
                e.turned = window.innerWidth > window.innerHeight;
                listener.call(elem, e);
            }
        }
        
    
    return handlers;
};