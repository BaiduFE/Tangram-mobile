/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
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
