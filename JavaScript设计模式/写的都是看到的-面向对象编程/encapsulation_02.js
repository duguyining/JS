//利用闭包实现
var Book=(function () {
    var bookNum=0;
    function checkBook(name) {

    }
    function book(newId,newName,newPrice) {
        var name,price;
        function checkID(id) {

        };
        this.getName=function () {

        };
        this.getPrice=function () {

        };
        this.setName=function () {

        };
        this.setPrice=function () {

        };
        //公有属性
        this.id=newId;
        this.copy=function () {

        };
        bookNum++;
        if (bookNum>100)
            throw new Error('我们仅出版100本书');
        this.setName(name);
        this.setPrice(price);
    }

    _book.prototype={
        isJSBook:false,
        display:function() {
        }
    };
    return _book;
})();