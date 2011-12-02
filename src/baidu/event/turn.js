/*
* Tangram Mobile
* Copyright 2010 Baidu Inc. All rights reserved.
*
*/

///import baidu.event;
///import baidu.page.$hideBar;
///import baidu.fn.bind;

baidu.event.turnHideBar = true;

/**
 * 旋转屏幕事件
 * 对事件对象e扩展一个属性：
 *  turned: {boolean} true为横屏，false为竖屏
 *
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.event.turn = function (elem, listener) {
    if (elem != window) {
        throw new Error("turn event must be bind in window");
    }

    function fn(e) {
        var turnHideBar = baidu.event.turnHideBar;
        if(turnHideBar) {
            baidu.page.hideBar(baidu.fn.bind(listener, elem, e));
        } else {
            listener.call(elem, e);
        }
    }

    //Android2.1以下版本不支持orientationchange事件，用resize模拟
    var handlers = "onorientationchange" in window ?
    {
        orientationchange : function(e) {
            switch(window.orientation) {
                case 0:
                case 180:
                    e.turned = false;
                    e.orientation = 'portrait';
                    break;
                case 90:
                case -90:
                    e.turned = true;
                    e.orientation = 'landscape';
                    break;
            }
            //android2.2会在旋转屏幕之前触发这个事件，通过setTimeout修复
            setTimeout( function() {
                fn(e);
            }, 0);
        }
    } :
    {
        resize : function(e) {
            if(window.innerWidth > window.innerHeight) {
                e.turned = true;
                e.orientation = 'landscape';
            } else {
                e.turned = false;
                e.orientation = 'portrait';
            }
            setTimeout( function() {
                fn(e);
            }, 200);
        }
    }

    return handlers;
};
