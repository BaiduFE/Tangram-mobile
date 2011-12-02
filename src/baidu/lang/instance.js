/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.lang._instances;

/**
 * 根据参数(guid)的指定，返回对应的实例对象引用
 * @name baidu.lang.instance
 * @function
 * @grammar baidu.lang.instance(guid)
 * @param {string} guid 需要获取实例的guid
 * @meta standard
 *             
 * @returns {Object|null} 如果存在的话，返回;否则返回null。
 */
baidu.lang.instance = function (guid) {
    return window[baidu.guid]._instances[guid] || null;
};
