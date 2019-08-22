function NewPerson(_name,_age,_gender){
    var obj={
        name:_name,
        age:_age,
        gender:_gender
    }

    return obj;
}

var zs=NewPerson("张三",33,"男")
var ls = NewPerson("李四",35,"男")
var ww = NewPerson("王五",23,"女")

console.log(zs);
console.log(ls);
console.log(ww);