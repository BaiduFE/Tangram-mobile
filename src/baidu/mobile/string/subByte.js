/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/subByte.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.subByte;

/**
 * 对目标字符串按gbk编码截取字节长度
 * @name baidu.mobile.string.subByte
 * @function
 * @grammar baidu.mobile.string.subByte(source, length)
 * @param {string} source 目标字符串
 * @param {number} length 需要截取的字节长度
 * @remark
 * 截取过程中，遇到半个汉字时，向下取整。
 * @see baidu.mobile.string.getByteLength
 *             
 * @returns {string} 字符串截取结果
 */
baidu.mobile.string.subByte = baidu.string.subByte;
