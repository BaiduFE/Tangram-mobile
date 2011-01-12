/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/browser/ipad.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.browser;
///import baidu.mobile.browser.iphone;

if (/ipad/i.test(navigator.userAgent)) {
/**
 * 判断是否为ipad系统
 * @grammar baidu.browser.ipad
 * @property ipad ipad版本号
 */
    baidu.mobile.browser.ipad = baidu.mobile.browser.iphone;
}