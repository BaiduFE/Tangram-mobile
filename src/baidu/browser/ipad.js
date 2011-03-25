/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/ipad.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.browser;
///import baidu.browser.iphone;

if (/iPad.*OS\s(\d[_\d]*)/i.test(navigator.userAgent)) {
/**
 * 判断是否为ipad系统
 * @grammar baidu.browser.ipad
 * @property ipad ipad版本号
 */
    baidu.browser.ipad = parseFloat(RegExp['\x241'].replace(/_/g, "."));
}