const menuList = [
    { pid: -1, path: '/cart', name: '购物车', id: 1, auth: 'cart' },
    { pid: 1, path: '/cart/cart-list', name: '购物车列表', id: 4, auth: 'cart-list' },
    { pid: 4, path: '/cart/cart-list/lottery', auth: 'lottery', id: 5, name: '彩票' },
    { pid: 4, path: '/cart/cart-list/product', auth: 'product', id: 6, name: '商品' },
    { pid: -1, path: '/shop', name: '商店', id: 2, auth: 'shop' },
    { pid: -1, path: '/profile', name: '个人中心', id: 3, auth: 'profile' }
]
const comments = [
    { id: 1, parent_id: null, text: 'First reply to post.' },
    { id: 2, parent_id: 1, text: 'First reply to comment #1.' },
    { id: 3, parent_id: 1, text: 'Second reply to comment #1.' },
    { id: 4, parent_id: 3, text: 'First reply to comment #3.' },
    { id: 5, parent_id: 4, text: 'First reply to comment #4.' },
    { id: 6, parent_id: null, text: 'Second reply to post.' }
]
const nest = (items, id = null, link = 'parent_id') => items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }))
console.log(nest(comments))
// const nest = (items, pid = null, link = 'id') => items.filter(item => item[link] === pid).map(item => ({ ...item, children: nest(items, item[link]) }))

// const next = (items, pid = null, Plink = 'id') => items.filter(item => item[Plink] === pid).map(item => ({ ...item, children: next(items, item.pid) }))
// const getMenuList = (list)=>{
//   function getList(pid){
//     return list.filter(item=> {
//       if(item.pid === pid){
//         let children = getList(item.id)
//         item.children = children.length? children : null
//         return item
//       }
//     })
//   }
//    const menuList = getList(-1)
//   return { menuList }
// }

// console.log(nest(menuList))
