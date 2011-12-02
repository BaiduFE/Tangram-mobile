/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Carousel;
///import baidu.fx.$start;

/**
 * 为滚动组件添加滑动效果插件
 * @remark 此插件一次只能展示一张图片
 */
baidu.ui.Carousel.extend({
	duration: 300,
	
	isEnableMoved: function(index, direction) {
		if(index == this.activeIndex)
			return false;

		return true;
	},
	
	slide: function(elem, options) {
		var options = options || {},
			elem = baidu.dom.g(elem),
	
			direction = options.direction || "left",
			out = options.out,
			isHori = (direction == "left" || direction == "right"),
	
			elemWidth = elem.offsetWidth,
			elemHeight = elem.offsetHeight,
	
			fromX = (isHori && !out) ? elemWidth : 0,
			fromY = (!isHori && !out) ? elemHeight : 0,
			toX = (isHori && out) ? -elemWidth : 0,
			toY = (!isHori && out) ? -elemHeight : 0;

		if (direction == 'right' || direction == 'down') {
			toY *= -1;
			toX *= -1;
			fromY *= -1;
			fromX *= -1;
		}

		options.from = options.from || {};
		options.to = options.to || {};
		
		options.from.left = fromX + "px";
		options.from.top = fromY + "px";
		
		options.to.left = toX + "px";
		options.to.top = toY + "px";

		baidu.fx.start(elem, options);
		return elem;
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

			baidu.dom.setStyle(items[index], 'display', 'block');

			me.slide(items[me.activeIndex], {
				out: true,
				duration: me.duration,
				direction: direction,
				delay: 5
			});

			me.slide(items[index], {
				direction: direction,
				duration: me.duration,
				onfinish: function() {
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