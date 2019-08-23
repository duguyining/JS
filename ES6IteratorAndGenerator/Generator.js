//生成器是函数：用来返回迭代器。

//这个概念有2个关键点，一个是函数、一个是返回迭代器。这个函数不是上面ES5中创建迭代器的函数，而是ES6中特有的，一个带有*（星号）的函数，同时你也需要使用到yield

//生成器函数，es6内部实现了迭代器功能，你要做的只是使用yield来迭代输出

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

const a=createIterator()
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
//生成器的yield关键字有个神奇的功能，就是当你执行一次next()，那么只会执行一个yield后面的内容，然后语句终止运行。


//在for循环中使用迭代器
/*
function *createIterator(items) {
    for (let i=0;i<items.length;i++) {
        yield items[i];
    }

}

const b=createIterator([1,2,3]);
console.log(b.next());*/
//生成器函数表达式
//函数表达式很简单，就是下面这种写法，也叫匿名函数，不用纠结
const createIterator = function *() {
    yield 1;
    yield 2;
}
const a = createIterator();
console.log(a.next());


//在obj中添加一个生成器，也就是添加一个带星号的方法
const obj = {
    a: 1,
    *createIterator() {
        yield this.a
    }
}
const a = obj.createIterator();
console.log(a.next());  //{value: 1, done: false}

//迭代器是对象，生成器是返回迭代器的函数



/*unction *createIterator() {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// // }
// // const a = createIterator();
// // for(let value of a) {
// //     console.log(value)
// // }
// // // 1 2 3*/
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
const a = createIterator(); //a是一个迭代器
const s = a[Symbol.iterator]();//使用Symbol.iterator访问迭代器
console.log(s.next()) //{value: 1, done: false}




