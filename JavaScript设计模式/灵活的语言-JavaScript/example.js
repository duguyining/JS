Function.prototype.addMethod=function (name,fn) {
    this.prototype[name]=fn;
}

var methods=function () {

};

methods.addMethod('checkName',function () {
//验证姓名
}).addMethod('checkEmail',function () {
//验证邮箱
});

var m=new methods();
m.checkEmail();