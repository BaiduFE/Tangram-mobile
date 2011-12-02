/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Carousel;
///import baidu.ui.Base.addEventListener;
///import baidu.dom.children;
///import baidu.array.$each;

/**
 * 为滚动组件添加标题插件
 */
baidu.ui.Carousel.register( function(me) {
	if(!me.roles.caption) {
		return;
	}

	var caption = me.roles.caption[0].element,
		captionItems = baidu.dom.children(caption);
	
	me.addEventListener('onload', function() {
		caption.style.overflow = 'hidden';
		baidu.array.each(captionItems, function(item, index) {
			if(index != me.activeIndex) {
				item.style.display = 'none';
			}
			item.style.position = 'absolute';
		})
	});
	
	me.addEventListener('onbeforeswipe', function() {
		me.slide(captionItems[me.activeIndex], {
			out: true,
			duration: 300,
			direction: 'down',
			onfinish: function() {
				this.style.display = 'none';
			}
		});
	});
	
	me.addEventListener('onslide', function() {
		captionItems[me.activeIndex].style.display = '';
		me.slide(captionItems[me.activeIndex], {
			duration: 300,
			direction: 'up'
		});
	});
});