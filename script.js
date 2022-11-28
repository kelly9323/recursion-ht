'use strict';
/**
 * 
 * @param {number}
 * @returns {number}
 * @throws {TypeError}
 * @throws {RangeError}
 */
function factorialCount(number) {
  if (typeof number !== "number" || typeof number === "null") {
    throw new TypeError("input must be a number");
  }
  if (number < 0) {
    throw new RangeError("input must be over 0");
  }
  if (number === 0) {
    return 1;
  }
  return number * factorialCount(number - 1);
}
console.log(factorialCount(5));

try {
  factorialCount(0);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}
