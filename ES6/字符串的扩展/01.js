/*遍历器最大的优点是可以识别大于0xFFFF的码点*/
let text=String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let i of text) {
    console.log(i);
}