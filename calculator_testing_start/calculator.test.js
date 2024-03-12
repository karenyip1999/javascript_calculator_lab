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
  test('can multiply two large positive numbers', () => {
    const expected = 5022;
    const actual = multiply(62, 81);
    expect(actual).toBe(expected);
  })
  
  test('can multiply two large negative numbers', () => {
    const expected = 5022;
    const actual = multiply(-62, -81);
    expect(actual).toBe(expected);
  })

  test('can multiply with zero', () => {
    const expected = 0;
    const actual = multiply(0, 22);
    expect(actual).toBe(expected);
  })

  test('can multiply with a negative and positive number', () => {
    const expected = -22;
    const actual = multiply(-2, 11);
    expect(actual).toBe(expected);
  })
});

describe('divide', () => {
  test('can divide with two large positive numbers', () => {
    const expected = 10;
    const actual = divide(5000,500);
    expect(actual).toBe(expected);
  })

  test('can divide with two small positive numbers', () => {
    const expected = 2;
    const actual = divide(10, 5);
    expect(actual).toBe(expected);
  })

  test('can divide with zero', () => {
    const expected = 0;
    const actual = divide(0, 159);
    expect(actual).toBe(expected);
  })

  test('can divide with two negative numbers', () => {
    const expected = 6;
    const actual = divide(-30, -5);
    expect(actual).toBe(expected);
  })
});

describe('modulus', () => {
  test('can modulo with two positive numbers', () => {
    const expected = 100;
    const actual = modulus(500, 200);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {

});

describe('odd', () => {

});
