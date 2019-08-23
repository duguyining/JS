//在ES6中，对象分为下面几种叫法。
//
// 1、普通对象
//
// 2、特异对象
//
// 3、标准对象
//
// 4、内建对象

{
    a:2
}

//属性初始值简写
//es5
/*
function a(id) {
    return{
        id:id
    };
};
*/

//es6
/*const a=(id)=>({id})*/

//对象方法简写
//es5
/*
const obj={
    id:1,
    printId:function () {
        console.log(this.id)
    }
}
*/

//es6
/*const obj={
    id:1,
    printId(){
        console.log(this.id);
    }
}*/

//属性值可以计算 属性名可以传入变量或者常量，而不只是一个固定的字符串
/*
const id=5;
const obj={
    [`my-${id}`]:id
}

console.log(obj['my-5']);//5
*/

//Object.is()
//
// 用来解决JavaScript中特殊类型 == 或者 === 异常的情况。



//Object.assign()
//
//mixin是一个方法，实现了拷贝一个对象给另外一个对象，返回一个新的对象。
//
// 下面是一个mixin方法的实现，这个方法实现的是浅拷贝。将b对象的属性拷贝到了a对象，合并成一个新的对象。
let a = {name: 'sb'};
let b = {
    c: {
        d: 5
    }
}

console.log(Object.assign(a, b));
//使用Object.assign()，你就可以不是有继承就能获得另一个对象的所有属性，快捷好用。 Object.assign 方法只复制源对象中可枚举的属性和对象自身的属性。 看一个实现Component的例子。
//声明一个对象Component
let Component={}
//给对象添加原型方法
Component.prototype={
    componentWillMount(){},
    componentDidMount(){},
    render(){
        console.log('render');}
}

//定义一个新的对象
let MyComponent={}
//拷贝Component的方法和属性
Object.assign(MyComponent,Component.prototype)
console.log(MyComponent.render());//render