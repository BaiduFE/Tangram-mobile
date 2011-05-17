module('baidu.ui.getAttribute');

test('getAttribute', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		expect(2);
		var button = document.createElement('button');
		button.setAttribute('t-ui', 'button');
		button.setAttribute('t-attr', 'a:1;b:2');
		document.body.appendChild(button);

		var ui = new baidu.ui.Button({
			element: button
		});

		ui.setup();
		
		var attr = baidu.ui.getAttribute(button);
		
		equal(attr.a, 1,  'check attr a');
		equal(attr.b, 2,  'check attr b');
		
		te.dom.push(button);
		start();
	}, '', '');
});