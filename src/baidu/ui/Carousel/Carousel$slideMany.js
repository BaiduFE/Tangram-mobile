/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.fx.$getTranslate;
///import baidu.fx.$start;
///import baidu.ui.Base.addEventListener;

/**
 * 为滚动组件添加角度旋转效果插件
 */
baidu.ui.Carousel.extend({
	count: 3,//显示的图片个数
	
	duration: 600,

	decreaseScale: 0.2,
	
	ratioX: 1,
	
	_translate: function(index, to, from, options) {
		var getTranslate = baidu.fx.getTranslate,
		me = this,
		elem = me.items[me.adjustIndex(index)];

		elem.style.display = 'block';
		options = baidu.object.extend(options || {}, {
			from :
			from ? {
				webkitTransform : getTranslate(from[0], from[1]) + ' scale(' + from[2] + ')'
			} : {},
			to : {
				webkitTransform : getTranslate(to[0], to[1]) + ' scale(' + to[2] + ')'
			}
		});
		baidu.fx.start(elem, options);
		return elem;
	},
	
	_getScaleX: function(index){
		return this._itemWidth * index * this.ratioX;
	},
	
	_getScale: function(activeIndex, index){
		var me = this,
			count = me.items.length;
			
		activeIndex = me.adjustIndex(activeIndex);
		index = me.adjustIndex(index);
		if(activeIndex > index){
			return 1 - (Math.min(Math.abs(index - activeIndex), Math.abs(index + count - activeIndex))) * me.decreaseScale;
		}else{
			return 1 - (Math.min(Math.abs(index - activeIndex), Math.abs(activeIndex + count - index))) * me.decreaseScale;
		}
	},

	goToItem: function(direction) {
		var me = this,
			count = Math.floor(me.count/2) + 1,
			scale,
			index = me.activeIndex,
			isLeft = direction == 'left',
			activeIndex = me.adjustIndex(index + (isLeft ? 1 : -1)),
			num = isLeft ? -1 : 1;

		if(me._moving) {
			return;
		}

		me.dispatchEvent("beforeswipe");

		me._moving = true;

		for(var i=-count + 1, j=0;i<count;i++,j++) {
			me._translate(index + i, [me._getScaleX(j + num), 0, me._getScale(activeIndex, index + i)], '', {
				duration: me.duration
			});
		}

		me._translate(index + (isLeft ? count : -count),
			[isLeft ? me._getScaleX(me.count + num) : 0, 0, me._getScale(activeIndex, index + (isLeft ? count : -count))],
			[me._getScaleX(isLeft ? me.count : -1), 0, me._getScale(activeIndex, isLeft ? me.count : -count)], {
				duration: me.duration,
				onfinish: function() {
					me._moving = false;
					me.dispatchEvent("slide");
				}
		});

		me.lastActiveIndex = me.activeIndex;
		me.activeIndex = activeIndex;

		me.dispatchEvent("swipe");
	}
});

baidu.ui.Carousel.register( function(me) {
	me.addEventListener('onsetup', function() {
		me._itemWidth = me.items[0].offsetWidth;
	});
	me.addEventListener('onload', function() {
		var count = Math.floor(me.count/2) + 1,
			scale,rotate;

		for(var i=-count + 1, j=0;i<count;i++,j++) {
			me._translate(me.activeIndex + i, [me._getScaleX(j), 0, me._getScale(0, i)], '', {
				duration:0
			});
		}
	});
});