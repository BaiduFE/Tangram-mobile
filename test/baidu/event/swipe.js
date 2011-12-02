module("baidu.event.swipe");

test("swipe", function() {
	baidu.event.on(document, 'swipe', function(){
		ok('true', 'on swipe');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'swipe');
	stop();
});