const shuffle = ([...arr]) => {

  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr
}

const foo = [{ a: 1 }, { a: 2 }, { a: 3 },{ a: 4 },{ a: 5 },{ a: 6 }];

console.log(shuffle(foo));
