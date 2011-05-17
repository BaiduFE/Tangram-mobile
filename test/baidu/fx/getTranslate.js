module('baidu.fx.getTranslate');

test('getTranslate', function(){
	baidu.browser.has3d ? equal('translate3d(100px, 0px, 0px)', baidu.fx.getTranslate(100, 0), 'check translate') : 
	equal('translate(100px, 0px)', baidu.fx.getTranslate(100, 0), 'check translate');
});