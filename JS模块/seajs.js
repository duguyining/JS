/*
SeaJS是一个遵循CMD规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。它应用于我国早期的一些js项目中,是淘宝js工程师 玉伯提出的一个方案。

使用seajs我们可以使用bootcdn加载seajs的1.3.1版本*/

<!-- 引入seajs -->
<script src="https://cdn.bootcss.com/seajs/1.3.1/sea.min.js">
    // 加载多个模块，在加载完成时，执行回调
    seajs.use(['./js/lisi','./js/zhangsan','./js/pengjin'], function(lisi,zhangsan,pengjin) {
    // lisi.Run()
    // zhangsan.Go()
    pengjin.Play()
});
</script>



//使用seajs的define函数通过module.exports暴露模块,定义common.js如下：
//所有模块都通过define来定义
define(function (require,exports,module) {

    function common() {
        return"common function return value."

    }
    //通过module.exports提供整个借口
    module.exports=common
});

//通过require引入依赖，并通过module.exports暴露模块
//定义的模块
define(function (require,exports,module){

    function Run() {
        //引入依赖
        var common=require("./common/common.js")
        console.log("this is pengjin module of run,common="+common())
    }
     function Go() {
        //引入依赖
         var common=require("./common/common.js")
         console.log("this is pengjin module of go,common="+common())
     }
    function Play(){
        //引入依赖
        var common = require("./common/common.js")
        console.log("this is pengjin module of play,common="+common())
    }
    module.exports = {
        Run:Run,
        Go:Go,
        Play:Play
    }

})


