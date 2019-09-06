/*用js创建一个计数器*/

'use strict'

function create_counter(initial) {
    var x=initial||0;
    return{
        inc:function () {
            x+=1;
            return x;
        }
    }
}

var c2=create_counter();
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());


var c1=create_counter(10);
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());






