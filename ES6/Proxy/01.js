/*
var obj=new Proxy({},{
    get:function (target,key,receiver) {
        console.log('getting ${key}!');
        return Reflect.get(target,key,receiver);
    },
    set:function (target,key,value,receiver) {
        console.log('setting ${key}!');
        return Reflect.set(target,key,value,receiver);
    }
});*/


/*

var proxy=new Proxy({},{
    get:function (target,property) {
        return 35;
    }
});

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);*/


/*var proxy=new Proxy({},{
    get:function (target,property) {
        return 35;
    }
});

let obj=Object.create(proxy);
console.log(obj.time);*/


//同一个拦截器函数，可以设置拦截多个操作
var handler={
    get:function (target,name) {
        if (name==='prototype'){
            return Object.prototype;
        }
        return 'hello,'+name;
    },

    apply:function (target,thisBinding,args) {
        return args[0];
    },
    construct:function (target,args) {
        return {value:args[1]};
    }
};

var fproxy=new Proxy(function (x,y) {
    return x+y;

},handler);

console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo === "hello,foo");

