/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.dom.$query;
///import ui;

/**
 * 获取元素所在的控件下所有或制定的role
 * @param {HTMLElement|string} element 要查找的元素
 * @return {array} 找到符合的子元素数组
 */
baidu.ui.getRoles = function(element) {
	var allElements = baidu.dom.query('[t-role]', element),
		result = [], attr,i;

	for(i=0;tempElement = allElements[i];i++) {
		role = tempElement.getAttribute('t-role');
		attr = {
			element: tempElement
		};
		if(result[role]) {
			result[role].push(attr);
		} else {
			result[role] = [attr];
		}
	}

	return result;
};