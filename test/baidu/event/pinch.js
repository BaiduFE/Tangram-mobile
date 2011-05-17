module("baidu.event.pinch");

test("pinch", function() {
	baidu.event.on(document, 'pinch', function(){
		ok('true', 'on pinch');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'pinch');
	stop();
});