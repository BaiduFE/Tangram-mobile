/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;
///import baidu.array.$each;

/**
 * 遍历角色或数组中所有元素
 * @param {String|Array} source 数组或者角色名称
 * @param {Function} iterator 对每个数组元素进行调用的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值
 */
baidu.ui.Base.prototype.each = function(source, iterator) {
	if(baidu.lang.isString(source)) {
		source = this.roles[source];
	}

	if(!source) {
		return;
	}

	baidu.array.each(source, function(item, i) {
		iterator(item, i);
	});
};