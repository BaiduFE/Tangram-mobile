/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/ui/scroller/Scroller$momentum.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.ui.scroller.Scroller;

/**
 * 获取动力计算后的目标位置和运动时间
 *         参考自iScroll http://cubiq.org/iscroll
 * @param {Object}  scroller       Scroller实例
 * @param {Object}  deltaTime    Scroller里touchstart和touchend间隔的时间
 * @return {Object}  {x, y, duration}
 * @private
 */
baidu.mobile.ui.scroller._getMomentum = function(scroller, deltaTime) {

    if (deltaTime > 250) {
        return {
            x : scroller.x,
            y : scroller.y,
            duration : 0
        }
    }
	
	/* todo 两种方式哪种好？
    var momentumX = scroller.lockScrollX ? 
        { dist: 0, duration: 0 } :
        baidu.mobile.ui.scroller._calcMomentum(scroller.x - scroller.startX,
                        deltaTime,
                        -scroller.x + scroller.wrapperWidth/5,
                        scroller.x + scroller.elemWidth - scroller.wrapperWidth + scroller.wrapperWidth/5),
                        
        momentumY = scroller.lockScrollY ? 
            { dist: 0, duration: 0 } : 
            baidu.mobile.ui.scroller._calcMomentum(scroller.y - scroller.startY,
                            deltaTime,
                            -scroller.y + scroller.wrapperHeight/5,
                            scroller.y + scroller.elemHeight - scroller.wrapperHeight + scroller.wrapperHeight/5),
	*/
	
	
	function getMomentum(direct) {
		var isX = direct == "x",
			wrapperType = isX ? "wrapperWidth" : "wrapperHeight",
			elemType = isX ? "elemWidth" : "elemHeight",
			startType = isX ? "startX" : "startY",
			lockType = isX ? "lockScrollX" : "lockScrollY";
			
		return scroller[lockType] ? 
			{ dist: 0, duration: 0 } : 
			baidu.mobile.ui.scroller._calcMomentum(scroller[direct] - scroller[startType],
							deltaTime,
							-scroller[direct] + scroller[wrapperType]/5,
							scroller[direct] + scroller[elemType] - scroller[wrapperType] + scroller[wrapperType]/5);
	}
		
	var momentumX = getMomentum("x"),
		momentumY = getMomentum("y"),
        duration =  Math.max(Math.max(momentumX.duration, momentumY.duration), 1);
	
	//动画运行结束后执行resetPosition
    setTimeout(scroller.resetPosition, duration);
    
    return {
        x : scroller.x + momentumX.dist,
        y : scroller.y + momentumY.dist,
        duration : duration + "ms"
    }
};


/**
 * 动力计算
 *         参考自iScroll http://cubiq.org/iscroll
 * @private
 */
baidu.mobile.ui.scroller._calcMomentum = function (dist, time, maxDistUpper, maxDistLower) {
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
};
