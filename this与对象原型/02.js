function baz() {
    //当前调用栈是baz
    //因此，当前调用位置是全局作用域
    console.log("baz");
    bar();//<--bar的调用位置
}

function bar() {
    //当前调用栈是baz->bar
    //因此，当前调用位置在baz中

    console.log("bar");
    foo();//<--foo的调用位置
}

function foo() {
    //栈 foo
    //因此调用位置在bar
    console.log("foo");
}

baz();//<--baz的调用位置