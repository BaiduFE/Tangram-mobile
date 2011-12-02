/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.fx;

 /**
 * 动画停止方法
 * @param {HTMLelem} elem  目标元素
 * @return {DOMElement} 目标元素
 */
baidu.fx.stop = function(elem) {
    elem.style['webkitTransitionDuration'] = null;
    elem.style["webkitTransitionProperty"] = null;
    return elem;
};
