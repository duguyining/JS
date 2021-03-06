/*js来写这些函数*/
'use strict';

//定义数字0
var zero=function (f) {
    return function (x) {
        return x;
    }
};

//定义数字1
var one=function (f) {
    return function (x) {
        return f(x);
    }
};

//定义加法
function add(n,m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}


// 计算数字2 = 1 + 1:
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

