/*
const m=new Map();
const o={p:'Hello World'};

m.set(o,'content');
m.get(o);

console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));*/

const map=new Map([
    ['name','张三'],
    ['title','Author']
]);


console.log(map.size);
console.log(map.has('name')); // true
console.log(map.get('name'));// "张三"
console.log(map.has('title')); // true
console.log(map.get('title'));
