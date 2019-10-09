/*快速提取 JSON 数据的值*/
let jsonData={
    id:42,
    status:"OK",
    data:[867,5309]
};

let {id,status,data:number}=jsonData;
console.log(id);
console.log(status);
console.log(number);


/*遍历map结构*/
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}