/**
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 */

///import baidu.ui.createUI;
///import baidu.ui.Base.on;
///import baidu.ui.Base.getClass;
///import baidu.ui.$getRoles;
///import baidu.dom.children;
///import baidu.dom.$setStyle;
///import baidu.dom.$addClass;
///import baidu.dom.$removeClass;
///import baidu.fx.$slide;
///import baidu.event.tap;
///import baidu.array.$each;

/**
 * Tab标签组
 * @class Tab类
 * @param {Object}              options       选项。
 * @returns {Tab}                        Tab类
 */
baidu.ui.Tab = baidu.ui.createUI( function(options) {

}).extend({
	uiType: 'tab',

	currentIndex: 0,

	/**
	 * 数据初始化
	 * @private
	 */
	_setup: function() {
		var me = this;
		me.heads = baidu.dom.children(me.roles.head[0].element);
		me.contents = baidu.dom.children(me.roles.content[0].element);
		me.dispatchEvent('setup');
	},
	/**
	 * 初始化按钮
	 * @private
	 */
	_init: function() {
		var me = this;
		
		baidu.array.each(me.heads, function(item, i) {
			me.on(item, 'tap', '_onSwitch', i);
		});
		
		baidu.array.each(me.contents, function(item, i) {
			baidu.dom.setStyle(item, 'position', 'absolute');
			if(me.currentIndex != i) {
				baidu.dom.setStyle(item, 'display', 'none');
			}
		});
		me.dispatchEvent('load');
	},
	/**
	 * 切换tab条目
	 * @private
	 */
	_onSwitch: function(i) {
		var me = this,
			heads = me.heads,
			currentClass = me.getClass('current');

		if(me.currentIndex == i) {
			return;
		}

		baidu.dom.addClass(heads[i], currentClass);
		baidu.dom.removeClass(heads[me.currentIndex], currentClass);

		me.switchTo(i, function() {
			me.dispatchEvent('switch');
		});
	},
	/**
	 * 滑动页面
	 * @param {Number} index Tab index
	 * @param {Function} fn 回调函数
	 */
	switchTo: function(index, fn) {
		var me = this,
			content = me.contents[index],
			direction = index > me.currentIndex ? 'left' : 'right',
			currentContent = me.contents[me.currentIndex];

		if(baidu.ui.Tab._moving) {
			return;
		}

		baidu.ui.Tab._moving = true;
		content.style.display = 'block'

		baidu.fx.slide(currentContent, {
			out: true,
			direction: direction,
			onfinish: function() {
				currentContent.style.display = 'none';
				baidu.ui.Tab._moving = false;
				me.currentIndex = index;
				fn && fn();
			}
		});

		baidu.fx.slide(content, {
			direction: direction
		});
	}
});