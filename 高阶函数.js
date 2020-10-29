
// 柯里化
const curring = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args);
    if (arr.length < len) {
      return curring(fn, arr);
    }
    return fn(...arr);
  };
};

function isType(type, content) {
  return Object.prototype.toString.call(content) === `[object ${type}]`;
}

let utils = {};
['String' , 'Number'].forEach((type) => {
  utils['is' + type] = curring(isType)(type);
});
console.log(utils.isString('1'));

// const add = () => {
//   let total = Array.from(arguments).reduce((total, num) => {
//     return (total += num);
//   }, 0);
//   return total;
// };

// const curring = (fn, arr = []) => {
//   let len = fn.length;
//   return function () {
//     arr = arr.concat(Array.from(arguments));
//     console.log(arr,arr.length);
//     if (arr.length < len) {
//       return curring(fn, arr);
//     }
//     console.log('arr.length');
//     return fn(arr);
//   };
// };

// let result = curring(add)(1)(2)(3)(4, 5);
// console.log(result);
