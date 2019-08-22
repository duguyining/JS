function Person(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.toString = function(){
    return "[Person person]{name:"+ this.name + ",age:" + this.age + ",gender:" + this.gender + "}"
}

var per = new Person("zs",33,"male")

alert(per) //alert其实现在很少人用了