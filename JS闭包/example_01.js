function myModule() {
    var world="this is a teacher"
    function Upper() {
        console.log("Upper is"+world.toUpperCase());
    }

    function Lower(){
        console.log("lower is " + world.toLowerCase() )
    }


    return{
        Upper:Upper,
        Lower:Lower
    }

}

var m=myModule()
m.Lower();
m.Upper();


//更为专业的定义如下

/*
(function(win){
    var world = "This is a teacher"
    function Upper(){
        console.log("upper is " + world.toUpperCase() )
    }
    function Lower(){
        console.log("lower is " + world.toLowerCase() )
    }
    win.MyModule = {
        Upper:Upper,
        Lower:Lower
    }
})(window)

MyModule.Upper();
MyModule.Lower();*/
