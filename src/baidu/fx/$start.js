/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx;
///import baidu.dom.$setStyles;

/**
 * 基础动画方法
 * @param {DOMElement} elem  目标元素
 * @param {Object} [options] 选项
 * @config {Function} [onstart] 动画开始前执行
 * @config {Function} [onfinish] 动画结束后执行
 * @config {String} [easing = 'ease'] 动画缓动  ease | linear | ease-in | ease-out | ease-in-out | step-start | step-end 
 * @config {Number} [duration = 800] 动画持续时间，单位ms
 * @config {Object} [from] 初始样式，例：{width: "100px"}
 * @config {Object} [to] 目标样式
 * @config {Number} [delay = 0] 延迟开始时间，单位ms
 * @return {DOMElement} 目标元素
 */
baidu.fx.start = function(elem, options) {
    var style = elem.style;
    style['webkitTransitionDuration'] = '0';
    baidu.dom.setStyles(elem, options.from || {});
    
    setTimeout(function() {
        style['webkitTransitionDuration'] = (options.duration || 600) + 'ms';
        style['webkitTransitionProperty'] = "all";
        style['webkitTransitionTimingFunction'] = options.easing || '';
        
        //应用to style，开始动画
        baidu.dom.setStyles(elem, options.to || {});
        
        function finish(){
        	options.onfinish && options.onfinish.call(elem);
            style['webkitTransitionProperty'] = null;
            elem.removeEventListener('webkitTransitionEnd', finish, false);
        }
        
        elem.addEventListener('webkitTransitionEnd', finish, false);   
    }, options.delay || 0);
    return elem;
};
