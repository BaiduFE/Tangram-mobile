/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Carousel.Carousel$cycle;

/**
 * 为滚动组件添加角度旋转效果插件
 */
baidu.ui.Carousel.extend({
	lastActiveIndex: 1,

	activeIndex: 1,
	
	count: 3,
	
	_translate: function(elem, to, from, options){
		var getTranslate = baidu.fx.getTranslate;
    
	    options = baidu.object.extend(options || {}, {
	        from : 
	            from ? 
	                {webkitTransform : getTranslate(from[0], from[1])} : 
	                {},
	        to : {webkitTransform : getTranslate(to[0], to[1]) + ' scale(' + to[2] + ')'}
	    });
	    baidu.fx.start(elem, options);
	    return elem;
	},

	_goToItem: function(direction) {
		var me = this,
		items = me.items,
		index = me.activeIndex,
		width = direction == 'left' ? -me._itemWidth : me._itemWidth;

		if(me._moving) {
			return;
		}

		me._moving = true;

		baidu.dom.setStyle(items[me._adjustIndex(index + (direction == 'left' ? 2 : -2))], 'display', 'block');

		me._translate(items[me._adjustIndex(index - 1)], [width + "px", 0, direction == 'left'? 0.8 : 1], '', {
			
		});
		me._translate(items[me._adjustIndex(index)], [me._itemWidth + width + "px", 0, 0.8]);

		me._translate(items[me._adjustIndex(index + 1)], [me._itemWidth * 2 + width + "px", 0, direction == 'left'? 1: 0.8]);
		me._translate(items[me._adjustIndex(index + (direction == 'left' ? 2 : -2))],
			direction == 'left' ? [me._itemWidth * 3 + width + "px", 0, 0.8] : [0, 0, 0.8],
			direction == 'left' ? [me._itemWidth * 3 + "px", 0] : [-me._itemWidth + "px", 0], {
				onfinish: function() {
					me._moving = false;
					me.lastActiveIndex = me.activeIndex;
					me.activeIndex = me._adjustIndex(me.activeIndex + (direction == 'left' ? 1 : -1));
					me.dispatchEvent("swipe");
				}
			});

		me.dispatchEvent("beforeswipe");
	}
});

baidu.ui.Carousel.register( function(me) {
	me.addEventListener('onsetup', function() {
		me._itemWidth = me.items[0].offsetWidth;
	});
	me.addEventListener('onload', function() {
		me._translate(me.items[me.activeIndex-1], [0,0,0.8], '', {duration:0});
		me._translate(me.items[me.activeIndex], [me._itemWidth,0,1], '', {duration:0});
		me._translate(me.items[me.activeIndex + 1], [me._itemWidth * 2,0,0.8], '', {duration:0});
	});
});