/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.fx.slide;

/**
 * 为滚动组件添加滑动效果插件
 * @remark 此插件一次只能展示一张图片
 */
baidu.ui.Carousel.extend({
	cycle: true,
	
	duration: 600,
	
	/**
	 * 校正index
	 * @private
	 */
    _adjustIndex: function(index) {
    	var me = this,
    		length = me.items.length;
    	
    	if(!me.cycle){
    		return Math.min(Math.max(0, index), length - 1);
    	}
        
        if(index < 0){
        	return length + index;
        }else if(index > length - 1){
        	return index - length;
        }
        return index;
    },
    
	/**
     *  滑动到到制定的item
     *  @param {String} direction 滑动方向
     * 	@private
     */
    _goToItem: function(direction) {
        var me = this,
        	items = me.items,
        	swipeItemCount = direction == "left" ? 1 : -1,
        	index = me._adjustIndex(me.activeIndex + swipeItemCount);        
        
        if(index == me.activeIndex || me._moving){
            return;
        }
        
        me.dispatchEvent("beforeswipe");
        
        me._moving = true;
        
        baidu.dom.setStyle(items[index], 'display', 'block');

        baidu.fx.slide(items[me.activeIndex], {
            out: true,
            duration: me.duration,
            direction: direction
        });

        baidu.fx.slide(items[index], {
            direction: direction,
            duration: me.duration,
            onfinish: function() {
                me._moving = false;
                me.dispatchEvent("slide");
            }
        });
        
        me.lastActiveIndex = me.activeIndex;
        me.activeIndex = index;
        
        me.dispatchEvent("swipe");
    }
});

baidu.ui.Carousel.register( function(me) {
	if(!me.roles.caption) {
		return;
	}

	var caption = me.roles.caption[0].element,
		captionItems = caption.children;
	
	me.addEventListener('onload', function() {
		caption.style.overflow = 'hidden';
		baidu.array.each(captionItems, function(item, index) {
			if(index != me.activeIndex) {
				item.style.display = 'none';
			}
		})
	});
	
	me.addEventListener('onbeforeswipe', function() {
		baidu.fx.slide(captionItems[me.activeIndex], {
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
		baidu.fx.slide(captionItems[me.activeIndex], {
			duration: 300,
			direction: 'up'
		});
	});
});