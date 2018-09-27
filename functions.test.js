const funcs = require('./functions')

describe('returnTwo method', ()=>{
    test('should return a number',()=>{
        let result = funcs.returnTwo();
        expect(typeof result).toBe('number')
    })
    test('should return the number 2',()=>{
        let result = funcs.returnTwo()
        expect(result).toBe(2)
    })
})

describe('greeting method',()=>{
    test('should return a string',()=>{
        let result = funcs.greeting();
        expect(typeof result).toBe('string')
    })
    test('should return "Hello, person!" when invoked without arg',()=>{
        let result = funcs.greeting();
        expect(result).toBe(`Hello, person!`)
    })
    test('should return "Hello, NAME!" where NAME being the passed in name',()=>{
        let name = "Isaiah";
        let result = funcs.greeting(name);
        expect(result).toBe(`Hello, ${name}!`)
    })
    test('should return an error when ',()=>{
        let name = 1;
        let result = funcs.greeting(name);
        expect(result).toBe(`Oops, you need to pass in a string`)
    })
    
    
})