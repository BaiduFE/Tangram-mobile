module('baidu.ui.getAttributesByRole');

test('getAttributesByRole no role argument', function() {
	var page = document.createElement('div');
	page.setAttribute('t-ui', 'page');
	
	var ok = document.createElement('div');
	ok.setAttribute('t-role', 'ok');
	ok.setAttribute('t-attr', 'a:1;');
	
	var ok1 = document.createElement('div');
	ok1.setAttribute('t-role', 'ok');
	ok1.setAttribute('t-attr', 'b:2');
	
	var cancel = document.createElement('div');
	cancel.setAttribute('t-role', 'cancel');
	cancel.setAttribute('t-attr', 'a:1;b:2');

	page.appendChild(ok);
	page.appendChild(ok1);
	page.appendChild(cancel);
	document.body.appendChild(page);
	
	var roles = baidu.ui.getAttributesByRole(page);
	
	equal(roles.ok.length, 2, 'check ok role count');
	equal(roles.cancel.length, 1, 'check cancel role count');
	equal(roles.ok[0].a, 1, 'check ok role[0] attribute');
	equal(roles.ok[1].b, 2, 'check ok role[1] attribute');
	equal(roles.cancel[0].a, 1, 'check ok cancel[1] attribute');

	te.dom.push(page);
});

test('getAttributesByRole with role argument', function() {
	var page = document.createElement('div');
	page.setAttribute('t-ui', 'page');
	
	var ok = document.createElement('div');
	ok.setAttribute('t-role', 'ok');
	ok.setAttribute('t-attr', 'a:1;');
	
	var ok1 = document.createElement('div');
	ok1.setAttribute('t-role', 'ok');
	ok1.setAttribute('t-attr', 'b:2');
	
	var cancel = document.createElement('div');
	cancel.setAttribute('t-role', 'cancel');
	cancel.setAttribute('t-attr', 'a:1;b:2');

	page.appendChild(ok);
	page.appendChild(ok1);
	page.appendChild(cancel);
	document.body.appendChild(page);
	
	var roles = baidu.ui.getAttributesByRole(page, 'ok');
	
	equal(roles.ok.length, 2, 'check ok role count');
	equal(roles.cancel, null, 'check cancel role count');
	equal(roles.ok[0].a, 1, 'check ok role[0] attribute');
	equal(roles.ok[1].b, 2, 'check ok role[1] attribute');

	te.dom.push(page);
});