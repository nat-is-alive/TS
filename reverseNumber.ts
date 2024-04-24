const reverseNumber = (num: number): number => {
  return parseInt(num.toString().split("").reverse().join(""));
};

console.log(reverseNumber(23) === 32);
console.log(reverseNumber(4232) === 2324);
