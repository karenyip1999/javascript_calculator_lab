const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 125;
    const actual = sum(23, 102);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -20;
    const actual = sum(-4, -16);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
