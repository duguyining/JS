/*
x=>x*x;

x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}*/


/*
var obj={
    birth:1990,
    getAge:function () {
        var b=this.birth;//1990
        var fn=()=>new Date().getFullYear()-this.birth;
        return fn();
    }
}

console.log(obj.getAge());*/

/*用箭头函数简化排序时传入的函数*/
'use strict'
var arr=[10,20,1,2];

arr.sort((x,y)=>
   x-y
);

console.log(arr);
