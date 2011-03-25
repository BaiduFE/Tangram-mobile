/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/fx/start.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.fx;
///import baidu.dom.g;
///import baidu.object.each;

/**
 * 基础动画方法
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项
 *     {
 *         onstart : function() {},     //动画开始前执行
 *         onfinish : function() {},     //动画结束后执行
 *         easing : "",                    //动画缓动  ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end 
 *         duration : 800,              //动画持续时间，单位ms
 *         from : {},                    //初始样式，例：{width: "100px"}
 *         to : {},                       //目标样式
 *         delay : 0                     //延迟开始时间，单位ms
 *     }
 */
baidu.fx.start = function(elem, options) {
    var 
        elem = baidu.dom.g(elem),
        style = elem.style,
        options = baidu.object.extend({
            onstart : function() {},
            onfinish : function() {},
            easing : "",
            duration : 800, 
            from : {},
            to : {},
            delay : 0
        }, options || {});
    
    style['webkitTransitionDuration'] = '0';
    if (baidu.browser.has3d) {
        elem.parentNode.style['webkitPerspective'] = 1200;
        elem.parentNode.style['webkitTransformStyle'] = 'preserve-3d';
    }
    
    baidu.object.each(options.from, function(value, property) {
        style[property] = value;
    });
    
    //setTimeout保证初始from style设置完成后再设置to style
    setTimeout(function() {
        style['webkitTransitionDuration'] = options.duration + 'ms';
        style['webkitTransitionProperty'] = "all";
        style['webkitTransitionTimingFunction'] = options.easing;
        
        options.onstart.call(elem, elem);
        
        //应用to style，开始动画
        baidu.object.each(options.to, function(value, property) {
            style[property] = value;
        });
        
        //存储变化的属性，给stop用
        elem["_tgFxTrsProp"] = elem["_tgFxTrsProp"] || [];
        baidu.object.each(options.to, function(value, property) {
            elem["_tgFxTrsProp"].push(property);
        });
        
        //用setTimeout模拟动画结束。存储在elem上为了在stop时用到。
        //不用webkitTransitionEnd事件的原因：两种动画叠加时无法分别处理两个动画的onfinish
        elem["_tgFxTimeoutFunc"] = function () {
            options.onfinish.call(elem, elem);
            style['webkitTransitionProperty'] = null;
            elem["_tgFxTimeout"] = null;
            elem["_tgFxTimeoutFunc"] = null;
            elem["_tgFxTrsProp"]  = null;
        }
        elem["_tgFxTimeout"] = setTimeout(elem["_tgFxTimeoutFunc"] , options.duration + options.delay);
        
    }, options.delay);
    return elem;
};