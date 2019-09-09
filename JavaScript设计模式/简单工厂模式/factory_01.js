//工厂模式
function createBook(name,time,type) {
    //创建一个对象，并且对象扩展属性和方法
    var o=new Object();
    o.name=name;
    o.time=time;
    o.type=type;
    o.getName=function () {
        console.log(this.name);
    };
    //将对象返回
    return o;
}

var book1=createBook('js book',2015,'js');
var book2=createBook('css book',2019,'css');

book1.getName();
book2.getName();