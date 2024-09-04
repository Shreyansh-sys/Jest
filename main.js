function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
};

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => {
      if (isLetter(char)) {
        const offset =
          char === char.toUpperCase() ? "A".charCodeAt(0) : "a".charCodeAt(0);

        if (offset === null) return char;

        return String.fromCharCode(
          ((char.charCodeAt(0) - offset + key) % 26) + offset
        );
      } else {
        return char;
      }
    })
    .join("");
}

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

function analyzeArray(arr) {
  const obj = {};
  const length = arr.length;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    sum += arr[i];
  }

  obj.min = min;
  obj.max = max;
  obj.length = length;
  obj.average = sum / length;

  return obj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
