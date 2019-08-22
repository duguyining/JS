var arr = [100,200,300,400,500,600,700]
for(var i=0;i<arr.length;i++){
    console.log( "索引:",i,"值:", arr[i],typeof i )
}

// 以上语句,索引i永远是number类型,如果使用for...in语句遍历数组

var arr = [100,200,300,400,500,600,700]
for (var key in arr)
{
    console.log( "索引:",key,"值:", arr[key],typeof arr[key],typeof key )
}

// 以上语句,索引key会发生隐式数据类型转换,变成了string类型,因此for...in语句效率比较低下