const menuList = [
    {pid:-1,path:'/cart',name:'购物车',id:1,auth:'cart'},
    {pid:1,path:'/cart/cart-list',name:'购物车列表',id:4,auth:'cart-list'},
    {pid:4,path:'/cart/cart-list/lottery',auth:'lottery',id:5,name:'彩票'},
    {pid:4,path:'/cart/cart-list/product',auth:'product',id:6,name:'商品'},
    {pid:-1,path:'/shop',name:'商店',id:2,auth:'shop'},
    {pid:-1,path:'/profile',name:'个人中心',id:3,auth:'profile'},
]

const getMenuList = (list)=>{
  function getList(pid){
    return list.filter(item=> {
      if(item.pid === pid){
        let children = getList(item.id)
        item.children = children.length? children : null
        return item
      }
    })
  }
   const menuList = getList(-1)
  return { menuList }
}

console.log(getMenuList(menuList));