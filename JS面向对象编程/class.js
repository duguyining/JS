class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        return 'Hello, ' + this.name + '!';
    }
}

var xiaoming = new Student('小明');
console.log(xiaoming.hello());

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        return 'I am at grade ' + this.grade;
    }
}
var xiaowang = new Student('小王',97);
console.log(xiaowang.myGrade());

