
  //   function sleep(duration) {
  //     return new Promise(function(resolve, reject) {
  //         setTimeout(resolve,duration);
  //     })
  // }
  // sleep(1000).then( ()=> console.log("finished"));


//   var r = new Promise(function(resolve, reject){
//     console.log("a");
//     resolve()
//   });
//   r.then(() => console.log("c"));
//   console.log("b")

export const isArrayEqual = (a, b, has = true) => {
    if (a.length !== b.length) return has = false
    const s = new Set(b);
    for (let i = 0; i < a.length; i++) {
        if(!s.has(a[i])) has = false
    }
    return has
}

console.log(isArrayEqual([1, 2, 3, 4,6], [2, 1, 3, 4,6]));