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

  test('can add zero', () => {
    const expected = 10;
    const actual = sum(10, 0);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {
  test('can subtract two large positive numbers', () => {
    const expected = 52;
    const actual = subtract(263, 211);
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    const expected = 4;
    const actual = subtract(-4, -8);
    expect(actual).toBe(expected);
  })

  test('can subtract two small positive numbers', () => {
    const expected = 2;
    const actual = subtract(8, 6);
    expect(actual).toBe(expected);
  })
  
  test('can subtract with zero', () => {
    const expected = -15;
    const actual = subtract(0, 15);
    expect(actual).toBe(expected);
  })
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
