/*
* Tangram Mobile
* Copyright 2011 Baidu Inc. All rights reserved.
*/

///import baidu.ui.Scroller;

baidu.ui.Scroller.extend({    
    /**
     * 获取动力计算后的目标位置和运动时间
     * @param {Object}  deltaTime    Scroller里touchstart和touchend间隔的时间
     * @return {Object}  {x, y, duration}
     * @private
     */
    _getMomentum: function(deltaTime) {
        if (deltaTime > 250) {
            return {
                x : this.x,
                y : this.y,
                duration : 0
            };
        }

        var me = this,
            result = { dist: 0, duration: 0 },
            
            momentumX = me.lockScrollX ? result : me._calcMomentum(me.x - me.startX,
                deltaTime,
                me.wrapperWidth/5 - me.x,
                me.x - me.minScrollX + me.wrapperWidth/5),   
                                   
            momentumY = me.lockScrollY ? result : me._calcMomentum(me.y - me.startY,
                deltaTime,
                me.wrapperHeight/5 - me.y,
                me.y - me.minScrollY + me.wrapperHeight/5),
                
            duration =  Math.max(Math.max(momentumX.duration, momentumY.duration), 1);
    
        return {
            x : me.x + momentumX.dist,
            y : me.y + momentumY.dist,
            duration : duration
        };
    },
    
    /**
     * 动力计算
     * @private
     */
    _calcMomentum: function (dist, time, maxDistUpper, maxDistLower) {
        //摩擦力越小滚动约远
        //经过测试android机器，把摩擦力减少到1.5比较合适
        var friction = 1.5,
            deceleration = 1.3,
            speed = Math.abs(dist) / time * 1000,
            newDist = speed * speed / friction / 1000,
            newTime = 0;

        // 超出边界时减速
        if (dist > 0 && newDist > maxDistUpper) {
            speed = speed * maxDistUpper / newDist / friction;
            newDist = maxDistUpper;
        } else if (dist < 0 && newDist > maxDistLower) {
            speed = speed * maxDistLower / newDist / friction;
            newDist = maxDistLower;
        }

        newDist = newDist * (dist < 0 ? -1 : 1);
        newTime = speed / deceleration;

        return { dist: Math.round(newDist), duration: Math.round(newTime) };
    }
});