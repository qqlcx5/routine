const shuffle = ([...arr])=>{
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr
}

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(foo));




















// const shuffle = ([...arr]) => {
//   let m = arr.length;
//   console.log(m,'length');
  
//   while (m) {
//     const i = Math.floor(Math.random() * m--);
//     console.log(i,'----');
    
//     [arr[m], arr[i]] = [arr[i], arr[m]];
//     console.log([arr[m], arr[i]]);
    
//   }
//   return arr;
// };

// const foo = [1, 2, 3,4,5,6,7,8,9];

console.log(shuffle(foo));
