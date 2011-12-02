/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*
*/

///import baidu.dom.$addClass;
///import baidu.dom.$removeClass;
///import baidu.dom.$hasClass;

/**
 * 添加或者删除一个节点中的指定class，如果已经有就删除，否则添加
 * @name baidu.dom.toggleClass
 * @function
 * @grammar baidu.dom.toggleClass(element, className)
 * @param {HTMLElement|string} element 目标元素或目标元素的id
 * @param {String} className 指定的className。不允许同时添加多个class
 * @version 1.3
 */
baidu.dom.toggleClass = function (element, className) {
    if(baidu.dom.hasClass(element, className)){
        baidu.dom.removeClass(element, className);
    }else{
        baidu.dom.addClass(element, className);
    }
};
