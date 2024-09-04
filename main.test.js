import { capitalize } from "./main";
import { reverseString } from "./main";
import { calculator } from "./main";
import { caesarCipher } from "./main";
import { analyzeArray } from "./main";

test("capitalize: passed", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("reverse the string: passed", () => {
  expect(reverseString("apple")).toBe("elppa");
});

describe("Caesar Cipher", () => {
  test("encrypt: should encode according to the key", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Calculator", () => {
  test("add: should return the sum of two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("subtract: should return the difference of two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test("multiply: should return the product of two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test("divide: should return the quotient of two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(0, 1)).toBe(0);
  });

  test("divide: should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
  });
});

describe("Analyze Array", () => {
  test("analyzeArray: should return an object with min, max, avg and length of the array", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual({ min: 1, max: 8, length: 8, average: 4.5});
  });
});
