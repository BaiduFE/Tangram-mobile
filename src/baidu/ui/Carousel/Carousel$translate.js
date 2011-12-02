/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Carousel;
///import baidu.fx.$slide;

/**
 * 为滚动组件添加滑动效果插件
 * @remark 此插件一次只能展示一张图片
 */
baidu.ui.Carousel.extend({
	duration: 600,
	
	slide: baidu.fx.slide,
	
	isEnableMoved: function(index, direction){
		if(index == this.activeIndex || this._moving)
			return false;
			
		return true;
	},

	/**
	 *  滑动到到制定的item
	 *  @param {String} direction 滑动方向
	 */
	goToItem: function(direction) {
		var me = this,
			items = me.items,
			swipeItemCount = direction == "left" ? 1 : -1,
			index = me.adjustIndex(me.activeIndex + swipeItemCount);

		if(me.isEnableMoved(index, direction)) {
			me.dispatchEvent("beforeswipe");

			me._moving = true;

			baidu.dom.setStyle(items[index], 'display', 'block');

			me.slide(items[me.activeIndex], {
				out: true,
				duration: me.duration,
				direction: direction
			});

			me.slide(items[index], {
				direction: direction,
				duration: me.duration,
				onfinish: function() {
					me._moving = false;
				    items[me.lastActiveIndex].style.display = 'none';
					me.dispatchEvent("slide");
				}
			});
			
			me.lastActiveIndex = me.activeIndex;
			me.activeIndex = index;
		}

		me.dispatchEvent("swipe", {
			direction: direction
		});
	}
});