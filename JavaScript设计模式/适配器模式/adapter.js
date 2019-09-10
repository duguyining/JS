//定义框架
var A=A||{};
A.g=function (id) {
    return document.getElementById(id)
};

//为元素绑定事件
A.on=function (id,type,fn) {
    var dom=typeof id==='string'?this.g(id):id;
    if (dom.addEventListener){
        dom.addEventListener(type,fn,false);
    } else if (dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    } else{
       dom['on'+type]=fn;
    }
};



