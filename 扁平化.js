// const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// const arr = [1, [2], [[3], 4], 5]

// const flatten = (arr) => 
//   arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
// flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

// 扁平化
// const deepFlatten = (arr) => arr.reduce((a, c) => a.concat(Array.isArray(c) ? deepFlatten(c) : c), [])

// 深度扁平化
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

const deepFlatten = (arr, depath = 1) => arr.reduce((a, c) => a.concat(depath>1 && Array.isArray(c) ? deepFlatten(c, depath - 1) : c), [])

// console.log(deepFlatten([1, [2], [[3], 4], 5]));
console.log(deepFlatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
