/*
function factorial(n) {
if (n === 1) return 1;
return n * factorial(n - 1);
}

console.log(factorial(5)); // 120*/


//尾递归优化
function factorial(n,total) {
    if (n===1) return total;
    return factorial(n-1,n*total);
}

console.log(factorial(5, 1));
