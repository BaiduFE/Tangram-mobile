module('baidu.event.fireCustomEvent');

test("tap", function() {
	stop();
	ua.importsrc('baidu.event.tap', function() {
		expect(1);

		baidu.event.on(document, 'tap', function(){
		ok('true', 'on tap');
		baidu.event.un(document, 'tap');
		start();
		});
		
		baidu.event.fireCustomEvent(document, 'tap');

	}, '', '');
});

test("dbtap", function() {
	stop();
	ua.importsrc('baidu.event.dbtap', function() {
		expect(1);

		baidu.event.on(document, 'dbtap', function() {
			ok('true', 'on dbtap');
			baidu.event.un(document, 'dbtap');
			start();
		});
		baidu.event.fireCustomEvent(document, 'dbtap');

	}, '', '');
});

test("drag", function() {
	stop();
	ua.importsrc('baidu.event.drag', function() {
		expect(1);

		baidu.event.on(document, 'drag', function() {
			ok('true', 'on drag');
			baidu.event.un(document, 'drag');
			start();
		});
		baidu.event.fireCustomEvent(document, 'drag');

	}, '', '');
});

test("swipe", function() {
	stop();
	ua.importsrc('baidu.event.swipe', function() {
		expect(1);

		baidu.event.on(document, 'swipe', function(){
			ok('true', 'on swipe');
			baidu.event.un(document, 'swipe');
			start();
		});
		
		baidu.event.fireCustomEvent(document, 'swipe');

	}, '', '');
});

test("pinch", function() {
	stop();
	ua.importsrc('baidu.event.pinch', function() {
		expect(1);

	baidu.event.on(document, 'pinch', function(){
		ok('true', 'on pinch');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'pinch');

	}, '', '');
});


test("customScroll", function() {
	stop();
	ua.importsrc('baidu.event.customScroll', function() {
		expect(1);

		baidu.event.on(document, 'customScroll', function() {
			ok('true', 'on scroll');
			baidu.event.un(document, 'customScroll');
			start();
		});
		baidu.event.fireCustomEvent(document, 'scroll');
		baidu.event.fire(document, 'scroll');

	}, '', '');
});

test("turn", function() {
	stop();
	ua.importsrc('baidu.event.turn', function() {
		expect(1);

		baidu.event.on(window, 'turn', function(){
			ok(true, 'on turn');
			baidu.event.un(window, 'turn');
			start();
		});
	
	baidu.event.fireCustomEvent(window, 'turn');

	}, '', '');
});

test("taphold", function() {
	stop();
	ua.importsrc('baidu.event.taphold', function() {
		expect(1);

		baidu.event.on(document, 'taphold', function(){
			ok('true', 'on taphold');
			baidu.event.un(document, 'taphold');
			start();
	});
	
	baidu.event.fireCustomEvent(document, 'taphold');

	}, '', '');
});