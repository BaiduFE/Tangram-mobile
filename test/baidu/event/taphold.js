module("baidu.event.taphold");

test("taphold", function() {
	baidu.event.on(document, 'taphold', function(){
		ok('true', 'on taphold');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'taphold');
	stop();
});