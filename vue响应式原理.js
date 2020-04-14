function render(){
  console.log('模拟视图渲染');
}
let obj = {name: 'jss',location: {x:100,y:10}}

function observer(obj){
  if(typeof obj == 'object'){
    for(let key in obj){
      defineReactive(obj,key,obj[key])
    }
  }
}
function defineReactive(obj,key,value){
  Object.defineProperty(obj,key,{
    get(){
      return value
    },
    set(newValue){
      value = newValue
      render() 
    }
  })
}
observer(obj)
obj.name = 'test'
obj.name = 'test1'