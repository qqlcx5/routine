// 检测数值出现次数
// const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a, 0)
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));

// deepFlatten([1, [2], [[3], 4], 5])
// const deepFlatten = arr => [].concat(...arr.map((v) =>( Array.isArray(v) ? deepFlatten(v) : v)))
// const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v),[])
// const deepFlatten = (arr,dep = 1) => arr.reduce((a, v) => a.concat(dep >1 && Array.isArray(v) ? deepFlatten(v) : v),[])

// console.log(deepFlatten([1, [2], [[3], 4], 5]));
