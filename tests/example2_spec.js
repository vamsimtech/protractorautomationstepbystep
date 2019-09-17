describe('Calculator',function(){
	
	it('addition test case',function(){
		
		var appURL='https://juliemr.github.io/protractor-demo/';
		browser.get(appURL);
		browser.sleep('10000');
		element(by.model('first')).sendKeys('4');
		
		element.all(by.options('value for (key, value) in operators')).get(1).click();
	//	browser.sleep('6000');
		element(by.model('second')).sendKeys('5');
		element(by.buttonText('Go!')).click();
		
		browser.sleep('10000');
	//	browser.manage.window.minimize();
	
	browser.quit();
		
	});
	
});