/*
 * Tangram Mobile
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * path: baidu/mobile/string/format.js
 * author: walter
 * version: 1.0.0
 * date: 2011/3/7
 */

///import baidu.mobile.string;

/**
 * 对目标字符串进行格式化
 * @name baidu.mobile.string.format
 * @function
 * @grammar baidu.mobile.string.format(source, opts)
 * @param {string} source 目标字符串
 * @param {Object|string...} opts 提供相应数据的对象或多个字符串
 * @remark
 * 
    opts参数为“Object”时，替换目标字符串中的#{property name}部分。<br>
    opts为“string...”时，替换目标字符串中的#{0}、#{1}...部分。
        
 * @shortcut format
 * @meta standard
 *             
 * @returns {string} 格式化后的字符串
 */
baidu.mobile.string.format = function (source, opts) {    
    if (arguments.length == 0) 
        return null;
    
    var data = Array.prototype.slice.call(arguments, 1);
    if(data.length == 1){
        data = Object.prototype.toString.call(opts);
    }
    
    return source.replace(/#\{(.+?)\}/g, function(m, i){
        return data[i];
    });
};

// 声明快捷方法
baidu.mobile.format = baidu.mobile.string.format;
