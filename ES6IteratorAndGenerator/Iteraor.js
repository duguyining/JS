//迭代器是一种特殊对象，每一个迭代器对象都有一个next()，该方法返回一个对象，包括value和done属性。


//实现一个返回迭代器对象的函数，注意该函数不是迭代器，返回结果才叫做迭代器
function createIterator(items) {
    var i=0;
    return{
        next(){
            var done=(i>=items.length);//判断i是否小于遍历对象的长度
            var value=!done?items[i++]:undefined;
            return{
                done,value
            }
        }
    }
}

const a=createIterator([1,2,3]);

//该方法返回的最终是一个对象
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
