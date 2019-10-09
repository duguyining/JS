/*对象的解构赋值*/
let [foo,[[bar],baz]]=[1,[[2],3]];
console.log(foo);
console.log(bar);
console.log(baz);

let [x,y,...z]=['a'];
console.log(x);
console.log(y);
console.log(z);


//要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值

function * fibs() {
    let a=0;
    let b=1;
    while (true){
        yield a;
        [a,b]=[b,a+b];
    }
}

let [first, second, third, fourth, fifth, sixth]=fibs();
console.log(sixth);
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);


/*对象的解构赋值*/
let {foo,bar}={foo:'aaa',bar:'bbb'};
console.log(foo);
console.log(bar);

/*字符串的解构赋值*/
const [a, b, c, d, e] = 'hello';
console.log(a);
