//commonjs是nodejs的解决方案,前提是我们需要安装node和npm,并且使用npm安装编译工具browserify.


//使用commonjs的方式编写common.js依赖库代码如下：
function common(){
    return "commonjs function"
}

module.exports = common

//编写模块,并且引入common.js库
function Run(){
    var common = require("./common/common.js")
    console.log("this is pengjin of run,common=",common())
}

function Go(){
    var common = require("./common/common.js")
    console.log("this is pengjin of go,common=",common())
}

function Play(){
    var common = require("./common/common.js")
    console.log("this is pengjin of play,common=",common())
}

module.exports = {
    Run:Run,
    Go:Go,
    Play:Play
}

//编写入库文件index.js
window.onload = function(){
    var pengjin = require("./pengjin.js")
    pengjin.Go();
}

//通过命令编译入口文件
// browserify index.js -o ../dist/index.js
// 在dist/index.js文件中生成如下代码：

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
        function common(){
            return "commonjs function"
        }

        module.exports = common
    },{}],2:[function(require,module,exports){
        window.onload = function(){
            var pengjin = require("./pengjin.js")
            pengjin.Go();
        }
    },{"./pengjin.js":3}],3:[function(require,module,exports){
        function Run(){
            var common = require("./common/common.js")
            console.log("this is pengjin of run,common=",common())
        }

        function Go(){
            var common = require("./common/common.js")
            console.log("this is pengjin of go,common=",common())
        }

        function Play(){
            var common = require("./common/common.js")
            console.log("this is pengjin of play,common=",common())
        }

        module.exports = {
            Run:Run,
            Go:Go,
            Play:Play
        }
    },{"./common/common.js":1}]},{},[2]);

//在index.html文件中引入dist/index.js文件
<script src="./dist/index.js"></script>