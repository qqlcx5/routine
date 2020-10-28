// function isType(type){
//   return function (content){
//     return Object.prototype.toString.call(content) === `[object ${type}]`
//   }
// }
// let util = {}; //需要分行;
// ['String'+ 'Number'].forEach(type => {
//    util['is'+type] = isType(type);
// });
// console.log(util.isString(123));

// 柯里化
const add = (a, b, c, d, e) => {
  return a + b + c + d + e
};
const curring = (fn, arr = []) => {
  let len = fn.length;
  // 剩余扩展符
  return (...args) => {
    console.log(args);
    arr = arr.concat(args);
    if (arr.length < len) {
      return curring(fn, arr);
    }
    return fn(...arr);
  };
};
let result = curring(add)(1)(2)(3)(4, 5);
console.log(result);
