//字符串中的子串识别

let t='abcdefg';
if (t.indexOf('cde'>-1)){
    console.log(2);
}

//**includes(str, index)：
//**如果在字符串中检测到指定文本，返回true，否则false。


let t='abcdefg';
if (t.includes('cde')){
    console.log(2);
}

//startsWith(str, index)：如果在字符串起始
// 部分检测到指定文本，返回true，否则返回false
let t='abcdefg';
if (t.startsWith('ab')){
    console.log(2);

}

//endsWith(str, index)：如果在字符串
//的结束部分检测到指定文本，返回true，否则返回false。
let t = 'abcdefg';
if(t.endsWith('fg')) {
    console.log(2)
}

/*如果你只是需要匹配字符串中是否包含某子字符串，那么推荐使用新增的方法，如果需要找到匹配字符串的位置，使用indexOf()。

repeat(number)

这个方法挺有意思的，接收一个Number类型的数据，返回一个重复N次的新字符串。即使这个字符串是空字符，也你能返回N个空字符的新字符串*/
console.log('ba'.repeat(3)) //bababa



//使用模板字面量反撇号``。在实际开发中，这是经常都要用到的方法
let c = `123`;//反撇号
//在字符串中使用反撇号，只需要加上转义符
let d=`12\`3`//字符串内插入反撇号的方式

let a = '123\n456'
console.log(a)

//在模板字面量插入变量的方法。

//我们不再需要使用 +（加号）来向字符串插入变量，而是使用${params}直接插入你需要添加到字符串的位置。

let t = 'haha'
let a = `123${t}456`
console.log(a) //123haha456

//模板字面量的终极用法 tag是一个方法，方法名你可以任意命名，这种写法被称作标签模板。
/*function tag(literals, ...substitutions) {
    //literals是数组，第一个位置是""，第二个位置是占位符之间的字符串，在本例中是haha
    //substitutions是字符串中的模板字面量，可能多个

    //函数最终返回字符串
}
let a = 4
let t = tag`${a} haha`
console.log(t) //4 haha*/





