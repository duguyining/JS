/*
返回闭包要牢记一点
返回函数不要引用
任何循环变量*/



function count() {
    var arr=[];
    for (var i = 1; i <=3; i++) {
        arr.push(function () {
            return i*i;
        })
    }
    return arr;
}

var results=count();
var f1=results[0];
var f2=results[1];
var f3=results[2];

console.log(f1());;
console.log(f2());;
console.log(f3());;
