/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.browser;

if (/android\s*(\d+[\.\d]*)/i.test(navigator.userAgent)) {
/**
 * 判断是否为Android系统
 * @grammar baidu.browser.android
 * @property android android版本号
 */
    baidu.browser.android = parseFloat(RegExp['\x241']);
}
