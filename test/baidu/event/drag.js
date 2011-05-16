module("baidu.event.drag");

test("drag", function() {
	baidu.event.on(document, 'drag', function(){
		ok('true', 'on drag');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'drag');
	stop();
});