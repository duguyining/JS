//块级作用域的使用场景

//循环中定时器闭包的考题

//在for循环中使用var声明的循环变量，会跳出循环体污染当前的函数

for (var i = 0; i < 5; i++) {
    setTimeout(()=>{
        console.log(i);//5,5,5,5,5)
    },0)

}
console.log(i);//5 跳出循环体污染外部函数

//将var 改成let之后
for (let i = 0; i <5 ; i++) {
    setTimeout(()=>{
        console.log(i);//0,1,2,3,4
    })
}
console.log(i);//i is not defined i无法污染外部函数