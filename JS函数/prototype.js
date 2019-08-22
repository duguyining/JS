/*原型对象
*创建的每一个函数，解析器都会向函数中添加一个属性prototype,
* 这个属性对应着一个对象，这个对象就是我们所谓的原型对象 */
function MyClass() {

}
//向MyClass的原型中添加属性hello
MyClass.prototype.Hello="hello";
var mc=new MyClass();
var mc2=new MyClass();

console.log(mc.hello);
console.log(mc2.Hello);