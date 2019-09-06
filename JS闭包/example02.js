/*创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改
* 已经绑定到函数参数的值不变*/

function count() {
    var arr=[];
    for (var i = 1; i <=3 ; i++) {
        arr.push((function (n) {
            return function () {
                return n*n;
            }
        })(i));
    }
    return arr;
}

var results=count();
var f1=results[0];
var f2=results[1];
var f3=results[2];

console.log(f1());
console.log(f2());
console.log(f3());