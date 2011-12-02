/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.string;

/**
 * 去掉字符串中的html标签
 * @param {string} source 要处理的字符串.
 * @return {string}
 */
baidu.string.stripTags = function(source) {
    return String(source || '').replace(/<[^>]+>/g, '');
};
