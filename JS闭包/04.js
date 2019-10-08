function CoolModule() {
    var something="cool";
    var another=[1,2,3];

    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join("!"));
    }
    return{
        doAnother:doAnother,
        doSomething:doSomething
    };
}

var foo=CoolModule();
foo.doSomething();
foo.doAnother();