/*/!*产生斐波那契数列*!/
function fib(max) {
    var t,
        a=0,
        b=1,
        arr=[0,1];
    while(arr.length<max){
        [a,b]=[b,a+b];
        arr.push(b);
    }
    return arr;
}

console.log(fib(5));
console.log(fib(10));*/

/*用generator改写*/
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while(n<max){
        yield a;
        [a,b]=[b,a+b];
        n++;
    }
    return;
}

console.log(fib(6));

var f = fib(6);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: false}
f.next(); // {value: undefined, done: true}