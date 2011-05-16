module('baidu.event.fire');

(function() {
	/**
	 * 校验事件触发
	 */
	var check = function(op) {
		var op = typeof op == 'string' ? {
			eName : op
		} : op, eName = op.eName, obj = op.obj
		|| document.body.appendChild(document.createElement('div')), options = op.options || {},
		evt = baidu.event.getCompat(obj, eName);
		
		obj.addEventListener(evt.name, function(event) {
			ok(true, 'event fired : ' + evt.name);
			if (op.callback) {
				op.callback(event);
			}
		}, false);

		if (op.options)
			baidu.event.fire(obj, evt.name, op.options);
		else {
			baidu.event.fire(obj, evt.name);
		}

	};
	/**
	 * fire event on dom
	 */
	test('on dom', function() {
		var eList = ['keypress', 'click', 'touchstart', 'touchmove', 'touchend'];
		var hList = [ 'abort', 'blur', 'change', 'focus', 'error','load','reset', 'select',
		'scroll', 'submit' ];
		var wList = [ 'scroll', 'resize', 'reset', 'submit', 'change',
		'select', 'error', 'abort', 'unload' ];
		for ( var e in eList) {
			check(eList[e]);
		}

		for ( var e in hList) {
			check({
				eName : hList[e],
				obj : document
			});
		}
		for ( var e in wList) {
			check({
				eName : wList[e],
				obj : window
			});
		}
		expect(eList.length + hList.length + wList.length);
	});
})();