const num = 100
// let isNum = false
// for(let i = 2;i < num; i++){
//   if(num % i === 0){
//     isNum = true
//     break
//   }
//   isNum = false
//   // for (let j = 2; j < i; j++) {
//   //   i % j === 0 ? isNum = true : isNum = false
//   // }
// }
// if(isNum){
//   console.log(num)
// }

let isTrue = true
  for (var i = 2; i < num; i++) {
      if (num % i == 0) {
          isTrue = false
          break;
      }
      // num % i == 0 ? console.log(false) : console.log(num)
  }
  if (isTrue) { console.log(num) } else { console.log("false") }
