/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/browser/android.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.browser;

if (/android\s*(\d+[\.\d]*)/i.test(navigator.userAgent)) {
/**
 * 判断是否为Android系统
 * @grammar baidu.browser.android
 * @property android android版本号
 */
    baidu.mobile.browser.android = parseFloat(RegExp['\x241']);
}
