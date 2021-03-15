// const isArrayEqual = (a, b, has = true) => {
//   if (a.length !== b.length) return has = false
//   const s = new Set(b);
//   for (let i = 0; i < a.length; i++) {
//       if(!s.has(a[i])) return has = false
//   }
//   return has
// }
// console.log(isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6]));

// function isObjectEqual(obj1, obj2, has = true) {
//   // 判断类型
//   const o1 = obj1 instanceof Object;
//   const o2 = obj2 instanceof Object;
//   if (!o1 || !o2) return obj1 === obj2;
//   // 判断长度
//   const keys1 = Object.getOwnPropertyNames(obj1);
//   const keys2 = Object.getOwnPropertyNames(obj2);
//   if (keys1.length !== keys2.length) return false;
//   // 各项对比
//   for (let o in obj1) {
//     let t1 = obj1[o] instanceof Object;
//     let t2 = obj2[o] instanceof Object;
//     if (t1 && t2) {
//       has = diffByObj(obj1[o], obj2[o]);
//     } else if (obj1[o] !== obj2[o]) {
//       has = false;
//       break;
//     }
//   }
//   return has;
// }
// console.log(isObjectEqual({a:2,b:4}, {b:4,a:2}));

// const diffArray = (a, b) => {
//   const a1 = new Set(a);
//   const b1 = new Set(b);
//   let arr1 = a.filter(x => !b1.has(x));
//   let arr2 = b.filter(x => !a1.has(x));
//   return [...arr1, ...arr2]
// };
// console.log(diffArray([1, 2, 6, 7], [1, 2, 9, 5]));

// const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon;

// console.log(aboutEqual(1.25, 1.2, 0.06));
// console.log(1.25, 1.2);

// const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
// console.log(getLineSize(0, 0, 3, 4));


// const uniqueArray = (...arr) => [... new Set(arr)]
// console.log(
//   uniqueArray(...[1, 2, 2, 3, 4, 4, 5])
// );

// arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /

// const isFind = (arr, fn, key) => !!arr.find(typeof fn === 'function' ? fn : val => val[fn] === key)

// console.log(isFind([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n', 9));

// const ascArr = (arr) => [...arr].sort((a, b) => a - b)
// const descArr = (arr) => [...arr].sort((a, b) => b - a)
// console.log(descArr([3, 2, 3, 4, 1]));
// const getCurrentURL = () => window.location.href;

//getCurrentURL 


// const haveArr = (a, b) => {
//   const s = new Set(b);
//   return a.filter(x => s.has(x));
// };

// haveArr([1, 2, 3], [5, 1, 2]); // [1, 2]

// const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
// console.log(isMobile);

// const cutOutArray = (arr, n = 1) => arr.slice(0, -n);

// initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
// initial([1, 2, 3]); // [1,2]
// console.log(cutOutArray([1, 2, 3], 2));

// const isBrowser = () => ![typeof window, typeof document].includes('undefined');
// isCurrentPage = () => !document.hidden

// isBrowser();
// isBrowser();
// console.log( { hair: 'long', beard: true }.hasOwnProperty('test')
// );

// const cloneArray = (arr) => [...arr]
// const cloneArray = (arr) => Array.from(arr)
// const cloneArray = (arr) => [].concat(arr)
// const cloneArray = (arr) => arr.map((x) => x);

// console.log(cloneArray([1,24]));

// const cloneObject = (obj, temp = {}) => temp = { ...obj }
// const cloneObject = (obj) => Object.assign({}, obj)
// const a = { x: true, y: 1 };
// const b = cloneObject(a); // a !== b
