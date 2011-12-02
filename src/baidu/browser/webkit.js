/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.browser;

if (/WebKit\/([\d.]+)/i.test(navigator.userAgent)) {
/**
 * 判断是否为webkit内核
 * @grammar baidu.browser.webkit
 * @property webkit 版本号
 */
    baidu.browser.webkit = parseFloat(RegExp['\x241'].replace(/_/g, "."));
}