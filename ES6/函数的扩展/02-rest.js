//ES6 引入 rest 参数（形式为...变量名）
/*
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(2, 5, 3));// 10
*/


function push(array,...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}

var a=[];
console.log(push(a, 1, 2, 3));