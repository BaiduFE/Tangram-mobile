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
///import baidu.dom.getComputedStyle;

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
        styles[prop] = gotoEnd ? baidu.getStyle(elem, prop)
                               : baidu.dom.getComputedStyle(elem, prop);
    }
    
    elem.style['webkitTransitionDuration'] = null;
    elem.style["webkitTransitionProperty"] = null;
    
    baidu.object.each(styles, function(value, property) {
        elem.style[property] = value;
    });

    if (gotoEnd) {
        elem["_tgFxTimeoutFunc"] && elem["_tgFxTimeoutFunc"].call(elem);
    }
    
    elem["_tgFxTrsProp"]  = null;
    elem["_tgFxTimeoutFunc"] = null;
    
    return elem;
};