/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/getByteLength.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;
///import baidu.string.getByteLength;

/**
 * 获取目标字符串在gbk编码下的字节长度
 * @name baidu.mobile.string.getByteLength
 * @function
 * @grammar baidu.mobile.string.getByteLength(source)
 * @param {string} source 目标字符串
 * @remark
 * 获取字符在gbk编码下的字节长度, 实现原理是认为大于127的就一定是双字节。如果字符超出gbk编码范围, 则这个计算不准确
 * @meta standard
 * @see baidu.mobile.string.subByte
 *             
 * @returns {number} 字节长度
 */
baidu.mobile.string.getByteLength = baidu.string.getByteLength;
