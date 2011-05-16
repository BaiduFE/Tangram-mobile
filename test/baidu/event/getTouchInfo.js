module('baidu.event.getTouchInfo');

test("getTouchInfo", function() {
	stop();
	ua.importsrc('baidu.event.on', function() {
		expect(2);

		baidu.event.on(document, 'touchstart', function(e){
		var touch = baidu.event.getTouchInfo(e);
		equal(0, touch.pageX, 'check touch pageX');
		equal(0, touch.pageY, 'check touch pageY');
		
		baidu.event.un(document, 'touchstart');
		
		start();
		});
		
		baidu.event.fireCustomEvent(document, 'touchstart');

	}, '', '');
});