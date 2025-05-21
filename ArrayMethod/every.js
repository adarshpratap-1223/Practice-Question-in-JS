const isBelowThreshold = (currentValue) => currentValue < 40;

const array = ["1","30","39","29","10","13"];

console.log(array.every(isBelowThreshold));