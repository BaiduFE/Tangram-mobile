/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/getTranslate.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.browser;
///import baidu.browser.has3d;
///import baidu.lang.isNumber;

/**
 * 获取支持3D加速的translate属性值
 * @param {String} x   X坐标
 * @param {String} y   Y坐标
 * @return {String}
 */
baidu.browser.getTranslate = function(x, y) {
    var translateOpen = 'translate' + (baidu.browser.has3d ? '3d(' : '('),
        translateClose = baidu.browser.has3d ? ',0)' : ')';
    x = baidu.lang.isNumber(x) ? x + "px" : x;
    y = baidu.lang.isNumber(y) ? y + "px" : y;
    return [translateOpen, x, ",", y, translateClose].join("");
};