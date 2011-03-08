/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/escapeReg.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.escapeReg;

/**
 * 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
 * @name baidu.mobile.string.escapeReg
 * @function
 * @grammar baidu.mobile.string.escapeReg(source)
 * @param {string} source 目标字符串
 * @remark
 * 给以下字符前加上“\”进行转义：.*+?^=!:${}()|[]/\
 * @meta standard
 *             
 * @returns {string} 转义后的字符串
 */
baidu.mobile.string.escapeReg = baidu.string.escapeReg;
