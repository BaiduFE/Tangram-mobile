module('baidu.ui.set');

test('set', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		var button = document.createElement('button');
		button.setAttribute('t-ui', 'button');
		document.body.appendChild(button);

		var ui = new baidu.ui.Button({
			element: button
		});

		ui.setup();
		
		baidu.ui.set(button, {
			testid: 'test'
		});

		equal(ui.testid, 'test', 'check button testid');
		te.dom.push(button);
		start();
	}, '', '');
});