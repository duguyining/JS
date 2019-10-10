
// console.log(...[1, 2, 3]);

function push(array,...items) {
    array.push(...items);
}

function add(x,y) {
    return x+y;
}

const numbers=[4,38];
console.log(add(...numbers));

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
console.log([...arr1, ...arr2, ...arr3]);


