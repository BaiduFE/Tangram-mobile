/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;

/**
 * 查找指定类型的父UI实例
 * @param {String} uiType ui类型
 * @return {Object} 查找到的父UI实例
 */
baidu.ui.Base.prototype.getParentUI = function(uiType) {
	var me = this,
		instance,
		element = me.element;

	while(element) {
		element = element.parentNode;

		if(element == document.body) {
			return null;
		}

		if(element.getAttribute('t-ui')) {
			instance = baidu.lang.instance(element.getAttribute('t-guid'));
			if(instance.uiType == uiType) {
				return instance;
			}
		}
	}

	return null;
};