/*
var fs=require('fs');

var data =fs.readFileSync('H:\\WebStorm\\js_repo\\NodeJS\\NodeJs回调函数\\input');

console.log(data.toString());
console.log("程序执行结束");*/


//非阻塞代码

var fs=require('fs');

fs.readFile('H:\\WebStorm\\js_repo\\NodeJS\\NodeJs回调函数\\input',function (err,data) {
    if (err)return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束");