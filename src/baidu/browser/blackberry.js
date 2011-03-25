/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/blackberry.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/24
 */

///import baidu.browser;

if (/(BlackBerry).*Version\/([\d.]+)/.test(navigator.userAgent)) {
/**
 * 判断是否为Blackberry系统
 * @grammar baidu.browser.blackberry
 * @property blackberry 版本号
 */
    baidu.browser.blackberry = parseFloat(RegExp['\x241']);
}
