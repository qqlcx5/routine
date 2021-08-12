var obj1 = {
  name: '张三',
  age: 14,
  friend: ['小红', '小白'],
  parents: {
    mother: { name: '李岚', age: 34 },
    father: { name: '张武', age: 35 },
  },
}
const deepClone = obj => {
    const isObject = args => (typeof args === 'object' || typeof args === 'function') && typeof args !== null
    if (!isObject) throw new Error('Not Reference Types')
    let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).map(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })
    return newObj
}

let obj2 = deepClone(obj1)

// function deepClone(obj) {
//     let newObj = Array.isArray(obj) ? [] : {}
//     if (obj && typeof obj === 'object') {
//       for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           newObj[key] = obj && typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
//         }
//       }
//     }
//     return newObj
//   }




obj1.parents.mother = { name: '李岚111', age: 355 }
console.log(obj1);
console.log('0000');
console.log(obj2);
