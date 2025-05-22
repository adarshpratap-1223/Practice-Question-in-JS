const array = [1,2,1];

const result = array.flatMap(num => (num === 2 ? [2,2] : 1));

console.log(result);