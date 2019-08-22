//通常属性名是数值且含有length属性的对象,我们称为伪数组,然而伪数组无法使用数组中的方法,这时我们需要把伪数组转换为真数组
var obj = new Object()
obj[0] = 100;
obj[1] = 200;
obj[2] = 300;
obj.length = 3;

console.log( Array.isArray(obj) );//false

var arr = Array.prototype.slice.call(obj);

console.log( Array.isArray(arr) );//true

arr.map(function(item,index){
    console.log(index,item)
});

//arguments
//函数中的形参都存放在arguments对象中，而arguments拥有length属性是一个经典的伪数组
function demo(){
    console.log( typeof arguments );
    console.log( arguments.length );
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2])
}

demo(100,200,300);
function demo(){
    var arr = Array.prototype.slice.call(arguments);
    arr.map(function(item,index){
        console.log(index,item)
    })
}

demo(100,200,300);