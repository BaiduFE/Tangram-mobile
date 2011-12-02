/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.dom;

/**
 * 从文档中获取指定的DOM元素
 * 
 * @param {string|HTMLElement} id 
 * @meta standard
 * @return {HTMLElement} DOM元素，如果不存在，返回null，如果参数不合法，直接返回参数
 */
baidu.dom.g = function (id) {
     return document.getElementById(id);
};

// 声明快捷方法
baidu.g = baidu.dom.g;
