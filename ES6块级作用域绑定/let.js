/*let和const都能够声明块级作用域，用法和var是类似的，
let的特点是不会变量提升，而是被锁在当前块中。*/
function test() {
    if (true){
        console.log(a);//TDZ，俗称临时死区，用来描述变量不提升的现象
        let a=1;
    }

}

test() //a is not defined

function test() {
    if (true){
        let a=1;
    }
    console.log(a);

}

test()//a is not defined

//唯一正确的使用方法：先声明，再访问。
function test() {
    if (true){
        let a=1;
        console.log(a);
    }

}

test()//1