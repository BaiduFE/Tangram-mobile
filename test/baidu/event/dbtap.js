module("baidu.event.dbtap");

test("dbtap", function() {
	baidu.event.on(document, 'dbtap', function(){
		ok('true', 'on dbtap');
		start();
	});
	
	baidu.event.fireCustomEvent(document, 'dbtap');
	stop();
});