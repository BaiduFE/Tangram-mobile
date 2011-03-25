/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/fx/stop.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.fx;
///import baidu.dom.g;
///import baidu.string.trim;
///import baidu.object.each;
///import baidu.dom.getStyle;

 /**
 * 动画停止方法
 * @param {HTMLelem} elem  目标元素
 * @param {boolean} gotoEnd 是否跳至动画结束状态(会触发onfinish)
 */
baidu.fx.stop = function(elem, gotoEnd) {
     var 
        elem = baidu.dom.g(elem),
        props = elem["_tgFxTrsProp"],
        styles = {};
        
    if (!props) {
        return;
    }
    for (var i = 0; i < props.length; i++) {
        var prop = baidu.string.trim(props[i]);
        //computed style是动画运行过程中的值
        //普通style是动画运动最终值，以此获得在当前状态停止的值或跳至最后状态停止
        styles[prop] = baidu.getStyle(elem, prop, !gotoEnd);
    }
    
    //fix for iOS opacity
    //在iOS3.1下 opacity属性停止运动时出现的问题：
    //   1.跳到结束状态：必须加elem.style['webkitTransitionDuration'] = null才能跳到结束状态，并且此时opacity无法跳到最后状态，动画依旧进行，未找到解决方法
    //   2.在当前状态停止：如果加上elem.style['webkitTransitionDuration'] = null，opacity的动画不会停止，其他动画停止。
    if (gotoEnd) {
        elem.style['webkitTransitionDuration'] = null;
    }
    elem.style["webkitTransitionProperty"] = null;
    
    if (baidu.fx._clearQueue) {
        baidu.fx._clearQueue(elem);
    }
    
    baidu.object.each(styles, function(value, property) {
        elem.style[property] = value;
    });

    clearTimeout(elem["_tgFxTimeout"]);
    if (gotoEnd) {
        elem["_tgFxTimeoutFunc"] && elem["_tgFxTimeoutFunc"]();
    } else {
        elem["_tgFxTimeout"] = null;
        elem["_tgFxTimeoutFunc"] = null;
        elem["_tgFxTrsProp"]  = null;
    }
    return elem;
};