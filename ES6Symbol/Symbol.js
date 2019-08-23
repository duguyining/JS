//Symbol 是一种特殊的、不可变的数据类型，可以作为对象属性的标识符使用。Symbol 对象是一个 symbol primitive data type 的隐式对象包装器。
//
// symbol 数据类型是一个原始数据类型。
//
// Symbol的语法格式：
//
// Symbol([description]) //description是可选的
const name=Symbol();
const name1=Symbol('sym1');
console.log(name,name1);

//使用
const  name2=Symbol('name2');
const obj={
    [name2]:"haha"
}
console.log(obj[name2]);//haha

//ES6提供了一个注册机制，当你注册Symbol之后，就能在全局共享注册
// 表里面的Symbol。Symbol的注册表和对象表很像，都是key、value结构，
// 只不过这个value是Symbol值。 （key, Symbol） 语法：
//从注册表获取全局共享的Symbol
let name3=Symbol('name3')
let name4=Symbol('name4')
let name5=Symbol('name5')

console.log(Symbol.keyFor(name3));
console.log(Symbol.keyFor(name4));
console.log(Symbol.keyFor(name5));


