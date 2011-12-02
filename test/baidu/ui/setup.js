module('baidu.ui.setup');

test('setup', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		expect(2);

		var button1 = document.createElement('button');
		button1.setAttribute('t-ui', 'button');

		var button2 = document.createElement('button');
		button2.setAttribute('t-ui', 'button');

		document.body.appendChild(button1);
		document.body.appendChild(button2);

		baidu.ui.setup( function() {
			var ui1 = baidu.lang.instance(button1.getAttribute('t-guid'));
			var ui2 = baidu.lang.instance(button2.getAttribute('t-guid'));

			ok(!ui1.disabled, 'check ui1 setup');
			ok(!ui2.disabled, 'check ui2 setup');

			te.dom.push(button1);
			te.dom.push(button2);

			start();
		});
	}, '', '');
});

test('setup with target', function() {
	stop();
	ua.importsrc('baidu.ui.Button', function() {
		expect(2);
		
		var target = document.createElement('div');

		var button1 = document.createElement('button');
		button1.setAttribute('t-ui', 'button');

		var button2 = document.createElement('button');
		button2.setAttribute('t-ui', 'button');

		document.body.appendChild(target);
		target.appendChild(button1);
		document.body.appendChild(button2);

		baidu.ui.setup( function() {
			var ui1 = baidu.lang.instance(button1.getAttribute('t-guid'));

			ok(!ui1.disabled, 'check ui1 setup');
			equal(button2.getAttribute('t-guid'), null, 'check ui2 setup');

			te.dom.push(button1);
			te.dom.push(button2);

			start();
		}, target);
	}, '', '');
});