const assert=require('chai').assert;
const app=require('../app')
// const sayHello=require('../app').sayHello;
// const addNumbers=require('../app').addNumbers;

//
sayHelloResults=app.sayHello()
addNumbersResults=app.addNumbers(5,5)


describe('sayHello',function (){
	
	it('app should return hello',function (){
		assert.equal(sayHelloResults,'hello')
	});

	it('sayHello should return type string',function (){
		
		assert.typeOf(sayHelloResults,'string')
	})


 });

describe('addNumbers',function (){
	
	it('addNumbers should return above 5',function (){
		
		assert.isAbove(addNumbersResults,5)
	})

	it('addNumbers should return type Number',function (){
		
		assert.typeOf(addNumbersResults,'number')
	})
})