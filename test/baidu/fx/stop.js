module('baidu.fx.stop');

test('stop', function() {
	stop();
	ua.importsrc('baidu.fx.start', function() {
		expect(1);
		var div = document.createElement('div');
		document.body.appendChild(div);

		baidu.fx.start(div, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			duration: 2000
		});

		setTimeout( function() {
			baidu.fx.stop(div);
			ok(div.style.opacity > 0 && div.style.opacity < 1, 'check opacity');
			start();
		}, 100);
		
		te.dom.push(div);
		stop();
	}, '', '');
});

test('gotoEnd', function() {
	stop();
	ua.importsrc('baidu.fx.start', function() {
		expect(1);
		var div = document.createElement('div');
		document.body.appendChild(div);

		baidu.fx.start(div, {
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			},
			duration: 2000
		});

		setTimeout( function() {
			baidu.fx.stop(div, true);
			equal(div.style.opacity, 1, 'check opacity');
			start();
		}, 100);
		
		te.dom.push(div);
		stop();
	}, '', '');
});