/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/iphone.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.browser;

if (/iphone\sOS\s(\d[_\d]*)/i.test(navigator.userAgent)) {
/**
 * 判断是否为iphone系统
 * @grammar baidu.browser.iphone
 * @property iphone iphone版本号
 */
    baidu.browser.iphone = parseFloat(RegExp['\x241'].replace(/_/g, "."));
}