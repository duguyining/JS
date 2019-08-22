// es6模块化目前是世界上唯一由官方提出的模块化方案,但目前后端尚未支持该方案,但相信在不久的将来es6模块化方案将统一js的前后端开发。 需要使用es6模块化需要安装webpack。
// npm install -g webpack@3.10.0
// 使用es6模块化方式export对外暴露common函数
//es6模块化使用export关键字对外暴露静态的代码块
export function common(){
    return "es6 common function return value."
}

// 使用import关键字导入common库并且使用export关键字的第2种方式对外暴露多个函数
//导入需要使用的依赖库
import {common} from "./common/common.js"

function Run(){
    console.log( "zhangsan of run,common="+common() )
}

function Go(){
    console.log( "zhangsan of go,common="+common() )
}

function Play(){
    console.log( "zhangsan of play,common="+common() )
}

export {
    //在es6的对象中如果方法名和属性名一致可以省略属性名,这里相当于Run:Run
    Run,
    Go,
    Play
}

//编写入口文件index.js
//as是把暴露的函数作为对象属性名导入
import * as pengjin from "./pengjin.js";
import * as zhangsan from "./zhangsan.js";

window.onload = function(){
    pengjin.Run();
    pengjin.Go();
    pengjin.Play();

    zhangsan.Run();
    zhangsan.Go();
    zhangsan.Play();
}

//使用webpack编译入口文件:
//webpack ./index.js ../dist/index.js

//在index.html引入./dist/index.js文件
<script src="./dist/index.js"></script>