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