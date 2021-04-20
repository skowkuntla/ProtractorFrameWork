const {browser, element} = require("protractor");

let HomePage = require('../PageObjects/HomePage')

describe('demo calculator tests', function () {

      it('addition tests', function () {

            HomePage.get('https://juliemr.github.io/protractor-demo/');

            HomePage.enterFirstNumber('4');

            HomePage.enterSecondNumber('5');

            HomePage.clickGo();

            HomePage.verifyResult('9');

            browser.sleep(2000)

      });

});