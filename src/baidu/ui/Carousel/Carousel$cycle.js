/*
* Tangram
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Carousel;

/**
 * 为滚动组件添加循环滚动插件
 */
baidu.ui.Carousel.extend({
	cycle: true,

	/**
	 * 校正index
	 * @private
	 */
    adjustIndex: function(index) {
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
    }
});