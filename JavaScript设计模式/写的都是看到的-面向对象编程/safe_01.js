var Book=function (title,time,type) {
    //判断执行过程中this是否是当前这个对象
    if (this instanceof Book){
        this.title=title;
        this.time=time;
        this.type=type;
    }else {
        return new Book(title,time,type);
    }
}


var book=Book('jsBook','2014','js');

console.log(book);
console.log(book.title);
console.log(book.time);
console.log(book.type);
console.log(window.title);
console.log(window.time);
console.log(window.type);