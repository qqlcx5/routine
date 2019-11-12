
// console.log(process.argv[process.argv.length-1])
const random = Math.random() * 3
console.log(Math.floor(random))
const arr = ['jiandao', 'shitou', 'bu']

const comp = arr[Math.floor(random)]
const user = process.argv[process.argv.length - 1]
console.log(comp, user);

if (comp === user) {
  console.log('平局');
} else if (
  (comp === 'jiandao' && user === 'bu') ||
  (comp === 'shitou' && user === 'jiandao') ||
  (comp === 'bu' && user === 'shitou')
) {
  console.log('输了');
} else {
  console.log('赢了');
}
