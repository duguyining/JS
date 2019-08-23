//在ES5中，我们给函数传参数，然后在函数体内设置默认值，如下面这种方式
function a(num,callback) {
    num=num||6
    callback=callback||function (data) {
        console.log('ES5:',data)}
        callback(num*num)
}
a()//ES5:36



//或者这样使用callback
a(10,function (data) {
    console.log(data*10)//1000,传参输出新数值

})


//ES6我们使用新的默认值写法
function a(num = 6, callback = function (data) {console.log('ES6: ', data)}) {
    callback(num * num)
}

a()  //不传参输出默认值

a(10,function (data) {
    console.log(data*10)
})


//默认值对arguments对象的影响
function a(num, b){
    console.log(arguments) // {"0": 6, "1": 10}
    console.log(arguments.length) // 2
}
a(6, 10)

function a(num = 1, b = 1){
    console.log(arguments)
}
a() // {} 默认值不能被arguments识别。
a(6, 10) // {"0":6,"1":10}


//在ES5的严格模式下，arguments就不能在函数内修改默认值后跟随着跟新了。
"use strict"; //严格模式
function a(num) {
    console.log(num === arguments[0]); // true
    num = 2;
    console.log(num === arguments[0]); // false
}
a(1);

//无命名参数
//上面说的参数都是命名参数，而无命名参数也是函数传参时经常用到的。当传入的参数是一个对象，不是一个具体的参数名，则是无命名参数
function add(object){
    console.log(object.a + object.b)
}
let obj = {
    a: 1,
    b: 2
}
add(obj) // 3

//不定参数的使用：使用...（展开运算符）的参数就是不定参数，它表示一个数组。
function add(...arr){
    console.log(a + b)
}
let a = 1,b = 2
add(a, b) // 3

//必须放在所有参数的末尾，不能用于对象字面量setter中
//错误的写法1
/*
function add(...arr, c){
    console.log(a + b)
}
let a = 1,b = 2,c = 3
add(a, b, c)

//错误的写法2
let obj = {
    set add(...arr) {

    }
}*/

//展开运算符（...）
//展开运算符的作用是解构数组，然后将每个数组元素作为函数参数。

//有了展开运算符，我们操作数组的时候，就可以不再使用apply来指定上下文环境了。
//ES6的写法
let arr = [10, 20, 50, 40, 30]
let a = Math.max(...arr)
console.log(a) // 50

//ES5的写法
let arr = [10, 20, 50, 40, 30]
let a = Math.max.apply(null, arr)
console.log(a) // 50


//箭头函数
const arr = [5, 10]
const s = arr.reduce((sum, item) => sum + item)
console.log(s) // 15
/*箭头函数和普通函数的区别是：

1、箭头函数没有this，函数内部的this来自于父级最近的非箭头函数，并且不能改变this的指向。

2、箭头函数没有super

3、箭头函数没有arguments

4、箭头函数没有new.target绑定。

5、不能使用new

6、没有原型

7、不支持重复的命名参数。*/

//箭头函数的左边表示输入的参数，右边表示输出的结果
const s = a => a
console.log(s(2)) // 2


//箭头函数还可以输出对象，在react的action中就推荐这种写法
const action = (type, a) => ({
    type: "TYPE",
    a
})

//支持立即执行函数表达式写法
const test = ((id) => {
    return {
        getId() {
            console.log(id)
        }
    }
})(18)
test.getId() // 18

//箭头函数给数组排序
const arr = [10, 50, 30, 40, 20]
const s = arr.sort((a, b) => a - b)
console.log(s) // [10,20,30,40,50]

//尾部用优化
/*尾调用是指在函数return的时候调用一个新的函数，由于尾调用的实现需要存储到内存中，在一个循环体中，如果存在函数的尾调用，你的内存可能爆满或溢出。

ES6中，引擎会帮你做好尾调用的优化工作，你不需要自己优化，但需要满足下面3个要求：

1、函数不是闭包

2、尾调用是函数最后一条语句

3、尾调用结果作为函数返回*/
"use strict";
function a() {
    return b();
}
//递归函数优化
//新型尾优化写法
"use strict";
function a(n, p = 1) {
    if(n <= 1) {
        return 1 * p
    }
    let s = n * p
    return a(n - 1, s)
}
//求 1 x 2 x 3的阶乘
let sum = a(3)
console.log(sum) // 6


