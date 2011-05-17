module("baidu.event.customScroll");

test("customScroll", function() {
	baidu.event.on(document, 'customScroll', function(){
		ok('true', 'on scroll');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'scroll');
	baidu.event.fire(document, 'scroll');
	stop();
});