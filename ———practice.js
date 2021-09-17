// const isArrayEqual = (a, b, has = true) => {
//   if (a.length !== b.length) return has = false
//   const s = new Set(b);
//   for (let i = 0; i < a.length; i++) {
//       if(!s.has(a[i])) return has = false
//   }
//   return has
// }
// console.log(isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6]));

// function isEqual(obj1, obj2, has = true) {
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
// console.log(isEqual({a:2,b:4}, {b:4,a:2}));

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


// const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

// console.log(isMobile());

// const isWechatBrowser = (() => {
//   let ua = navigator.userAgent.toLowerCase();
//   return /micromessenger/.test(ua)
// })();
// console.log(isWechatBrowser);


// ['contextmenu', 'selectstart', 'copy'].forEach( o=> document.addEventListener(o, (event)=> event.returnValue = false))

// console.log();

// const minArray = (arr) =>  Math.min(...(arr.filter(Boolean)))
// console.log(minArray([1,2,3,4,5, null, NaN]));




// const batches = (recipe, available) =>
// Math.floor(Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0)))
// console.log(batches(
//   { milk: 2, sugar: 40, butter: 20 },
//   { milk: 5, sugar: 120, butter: 500 }
// ));

// const maskString = (str, maskChar = "*") => str.slice(0, 4).padEnd(str.length, maskChar)

// maskString("18659808664") // "18****8664" 

// console.log(maskString("18659808664"));

// const randomNumber = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min

// const compact = arr => arr.filter(Boolean);

// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]


// const calcFn = {
//   add() {
//       let arg = Array.from(arguments);
//       return arg.reduce((total, num) => {
//           return accAdd(total, num);
//       });
//   },
//   sub() {
//       let arg = Array.from(arguments);
//       return arg.reduce((total, num) => {
//           return accAdd(total, -num);
//       });
//   },
//   mul() {
//       let arg = Array.from(arguments);
//       return arg.reduce((total, num) => {
//           return accMul(total, num);
//       });
//   },
//   div() {
//       let arg = Array.from(arguments);
//       return arg.reduce((total, num) => {
//           return accDiv(total, num);
//       });
//   }
// }

// //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
// //调用：accAdd(arg1,arg2)
// //返回值：arg1加上arg2的精确结果
// function accAdd(arg1, arg2) {
//   var r1, r2, m;
//   try {
//       r1 = arg1.toString().split(".")[1].length;
//   } catch (e) {
//       r1 = 0;
//   }
//   try {
//       r2 = arg2.toString().split(".")[1].length;
//   } catch (e) {
//       r2 = 0;
//   }
//   m = Math.pow(10, Math.max(r1, r2));
//   console.log(arg2);
//   return (arg1 * m + arg2 * m) / m;
// }

// //说明：javascript的减法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。
// //调用：accSub(arg1,arg2)
// //返回值：arg1减上arg2的精确结果
// function accSub(arg1, arg2) {
//   return accAdd(arg1, -arg2);
// }

// //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
// //调用：accMul(arg1,arg2)
// //返回值：arg1乘以arg2的精确结果
// function accMul(arg1, arg2) {
//   var m = 0,
//       s1 = arg1.toString(),
//       s2 = arg2.toString();
//   try {
//       m += s1.split(".")[1].length;
//   } catch (e) {}
//   try {
//       m += s2.split(".")[1].length;
//   } catch (e) {}
//   return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
// }

// //说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
// //调用：accDiv(arg1,arg2)
// //返回值：arg1除以arg2的精确结果
// function accDiv(arg1, arg2) {
//   var t1 = 0,
//       t2 = 0,
//       r1, r2;
//   try {
//       t1 = arg1.toString().split(".")[1].length;
//   } catch (e) {}
//   try {
//       t2 = arg2.toString().split(".")[1].length;
//   } catch (e) {}
//   r1 = Number(arg1.toString().replace(".", ""));
//   r2 = Number(arg2.toString().replace(".", ""));
//   return (r1 / r2) * Math.pow(10, t2 - t1);
// }


// // console.log(calcFn.add(0.1 , 0.2));
// console.log(calcFn.div(0.1, 0.2));
 
// function commafy(num){
//   return num && num
//     .toString()
//     .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
//       return $2 + ',';
//     });
// }

// const thousands = (num) => num.toString().replace(num.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, '$1,')
// console.log(thousands(12255555.2323));

// let typeFn = {}
// const curring = (fn, arr = []) => {
// let len = fn.length;
// return (...args) => {
//         arr = arr.concat(args);
//         if (arr.length < len) {
//         return curring(fn, arr);
//         }
//         return fn(...arr);
//     };
// };

// function isType(type, content) {
//     console.log(Object.prototype.toString.call(content));
//     return Object.prototype.toString.call(content) === `[object ${type}]`;
// }
// ['String' , 'Number', 'Boolean', 'Null', 'Array', 'Object', 'Function'].forEach((type) => {
//     typeFn[type] = curring(isType)(type);
// })

// typeFn.String('1')
// typeFn.Number(1)
// typeFn.Boolean(false)
// typeFn.Null(null)
// typeFn.Array([1, 2])
// typeFn.Object({a: 1})
// typeFn.Function(()=>{})

// const compact = (arr) => arr.filter(Boolean)
// compact([0, 1, false, 2, '', 3])
// // => [1, 2, 3]


// console.log(concat(1,2,[4, 5]));

// // => [1, 2, 3, [4]]
 
// console.log(array);


// const weightedAverage = (nums, weights) => {
//   const [sum, weightSum] = weights.reduce(
//     (acc, w, i) => {
//       acc[0] = acc[0] + nums[i] * w;
//       acc[1] = acc[1] + w;
//       return acc;
//     },
//     [0, 0]
//   );
//   return sum / weightSum;
// };
// console.log(weightedAverage([1,2,3], [0.5,0.5,0.5]));


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("A"), Math.floor(Math.random() * 1000));
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("B"), Math.floor(Math.random() * 1000));
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
// });
// (async function() {
//   const result = await Promise.race([p1, p2, p3]);
//   console.log(result); // Prints "A", "B" or "C"
// })();
