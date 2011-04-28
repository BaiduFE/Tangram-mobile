/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
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
