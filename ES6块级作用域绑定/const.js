//声明常量，一旦声明，不可更改，而且常量必须初始化赋值
const type="ACTION"

//重新申明type
const type="ACTION"
// type =1
console.log(type);//"type"is read-only

const type="ACTION"
let type=1
console.log(type);//Duplicate declaration "type"

/*const虽然是常量，不允许修改默认赋值，但如果定
义的是对象Object，那么可以修
改对象内部的属性值包括新增删除键值对也是可以的。*/

const type={
    a:1
}
type.a=2//没有直接修改type的值。而是修改type.a的属性值，这是允许的
console.log(type);//{a:2}

type.b=3//扩展Object也是没有问题的
console.log(type);//{a:2,b=3}

// delete type.b=3//删除整个键值对也ok
console.log(type);//{a:2}

//如果重新定义数据结构，常量的内存地址值发生改变，这个是不可行的
// type={};//Assignment to constant variable.
// type={};//Assignment to constant variable.
