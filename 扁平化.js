// console.log(deepFlatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
// 扁平化  Map 方法
// const deepFlatten = (arr)=> [].concat(...arr.map(v => Array.isArray(v)? deepFlatten(v): v))
// 扁平化  reduce 方法
// const deepFlatten = (arr) => arr.reduce((a, c) => a.concat(Array.isArray(c)? deepFlatten(c) :c),[])
// 深度扁平化  reduce 方法
const deepFlatten = (arr, depth = 1) => arr.reduce((a, c) => a.concat(depth>1 && Array.isArray(c)? deepFlatten(c,depth -1) :c),[])

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
console.log(deepFlatten([1, [2], [[3], 4], 5]));
