/*构造函数*/

/*function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming=new Student('小明');
console.log(xiaoming.name);
console.log(xiaoming.hello())*/

function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}


Student.prototype.hello=function () {
    alert('hello,'+this.name+'!');
};

function createStudent(props) {
    return new Student(props||{})
}


var xiaoming = createStudent({
    name: '小明'
});

console.log(xiaoming.grade);


