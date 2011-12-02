/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Base;

/**
 * 获得class，支持skin
 *
 * @param {string} optional key
 * @return {string} className
 */
baidu.ui.Base.prototype.getClass = function(key) {
	var me = this,
		className = me.classPrefix || "tangram-" + me.uiType.toLowerCase(),
		skinName = me.skin;
		
	if (key) {
		className += '-' + key;
		skinName += '-' + key;
	}
	if (me.skin) {
		className += ' ' + skinName;
	}
	return className;
};