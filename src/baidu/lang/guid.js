/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

/**
 * 返回一个当前页面的唯一标识字符串。
 * @name baidu.lang.guid
 * @function
 * @grammar baidu.lang.guid()
 * @version 1.1.1
 * @meta standard
 *             
 * @returns {String} 当前页面的唯一标识字符串
 */
///import baidu.lang;
(function(){
    //不直接使用window，可以提高3倍左右性能
    var guid = window[baidu.guid];

    baidu.lang.guid = function() {
        return "TANGRAM__" + (guid._counter ++).toString(36);
    };

    guid._counter = guid._counter || 1;
})();
