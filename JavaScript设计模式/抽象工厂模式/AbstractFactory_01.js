//抽象工厂方法
var VehicleFactory=function (subType,superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType]==='function'){
            //缓存类
            function F() {};
            //继承父类属性和方法
            F.prototype=new VehicleFactory[superType]();
            //将子类constructor指向子类
            subType.constructor=subType;
            //子类原型继承父类
            subType.prototype=new F();
        }
        else{
            //不存在该抽象类抛出错误
            throw new Error('未创建该抽象类');
        }
}

//汽车抽象类
VehicleFactory.Car=function () {
    this.type='car';
};

VehicleFactory.car.prototype={
    getPrice:function () {
        return new Error('不能调用')
    },
    getSpeed:function () {
        return new Error('不能调用')
    }
};

//宝马汽车子类
var BMW=function (price,speed) {
    this.price=price;
    this.speed=speed;
}

//抽象方法实现对car抽象类的继承
VehicleFactory(BMW,'car');
BMW.prototype.getPrice=function () {
    return this.price;
};
BMW.prototype.getSpeed=function () {
    return this.speed;
};


var bmw=new BMW(10000000,1000);
console.log(bmw.getPrice());
console.log(bmw.type);