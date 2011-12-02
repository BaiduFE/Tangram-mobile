/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.browser;

if (/webOS\/([\d.]+)/i.test(navigator.userAgent)) {
/**
 * 判断是否为webOS系统
 * @grammar baidu.browser.webos
 * @property webos 版本号
 */
    baidu.browser.webos = parseFloat(RegExp['\x241'].replace(/_/g, "."));
}