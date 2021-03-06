const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
// const result = responseList.reduce((acc, cur) => {
//   const ids = acc.map((item) => item.id);
//   return ids.includes(cur.id) ? acc : [...acc, cur];
// }, []);
// console.log(result);

const uniqueArrayObject = (arr, key) => {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((item) => item[key]);
    return ids.includes(cur[key]) ? acc : [...acc, cur];
  }, []);
};

console.log(uniqueArrayObject(responseList, 'id'));
// const result = responseList.reduce((acc, cur) => {
//     console.log(acc,cur);
//     const ids = acc.map(item => item.id);
//     return ids.includes(cur.id) ? acc : [...acc, cur];
// }, []);
// console.log(result);
