const setTree = (arr, id = null, link = 'parent_id') =>
  arr
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: setTree(arr, item.id) }));

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];
const nestedComments = setTree(comments);

console.log(nestedComments);
