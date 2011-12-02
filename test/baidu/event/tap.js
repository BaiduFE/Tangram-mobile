module("baidu.event.tap");

test("tap", function() {
	baidu.event.on(document, 'tap', function(){
		ok('true', 'on tap');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'tap');
	stop();
});