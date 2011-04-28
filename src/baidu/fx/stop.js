/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx;
///import baidu.dom.g;
///import baidu.string.trim;
///import baidu.object.each;
///import baidu.dom.getStyle;
///import baidu.dom.getComputedStyle;
///import baidu.dom.setStyles;
///import baidu.dom._styleFilter.px;

 /**
 * 动画停止方法
 * @param {HTMLelem} elem  目标元素
 * @param {boolean} gotoEnd 是否跳至动画结束状态(会触发onfinish)
 */
baidu.fx.stop = function(elem, gotoEnd) {
     var 
        d = baidu.dom,
        elem = d.g(elem),
        styles = elem["_tgFxTrsProp"];
        
    if (!styles) {
        return;
    }
    
    for(var p in styles){
        //computed style是动画运行过程中的值
        //普通style是动画运动最终值，以此获得在当前状态停止的值或跳至最后状态停止
        styles[prop] = gotoEnd ? baidu.getStyle(elem, prop)
        styles[p] = gotoEnd ? d.getStyle(elem, p) : d.getComputedStyle(elem, p);
    }
    
    elem.style['webkitTransitionDuration'] = null;
    elem.style["webkitTransitionProperty"] = null;
    
    baidu.dom.setStyles(elem, styles);

    if (gotoEnd) {
        elem["_tgFxTimeoutFunc"] && elem["_tgFxTimeoutFunc"].call(elem);
    }
    
    elem["_tgFxTrsProp"]  = null;
    elem["_tgFxTimeoutFunc"] = null;
    
    return elem;
};
