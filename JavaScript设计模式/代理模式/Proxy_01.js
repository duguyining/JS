//图片懒加载
//图片加载
let imageEle = (function(){
    let node = document.createElement('img');
    document.body.appendChild(node);
    return {
        setSrc:function(src){
            node.src = src;
        }
    }
})();

//代理对象
let proxy = (function(){
    let img = new Image();
    img.onload = function(){
        imageEle.setSrc(this.src);
    };
    return {
        setSrc:function(src){
            img.src = src;
            imageEle.setSrc('loading.gif');
        }
    }
})();

proxy.setSrc('example.png');


//合并http请求
//上传请求
let upload = function(ids){
    $.ajax({
        data: {
            id:ids
        }
    })
}

//代理合并请求
let proxy = (function(){
    let cache = [],
        timer = null;
    return function(id){
        cache[cache.length] = id;
        if(timer) return false;
        timer = setTimeout(function(){
            upload(cache.join(','));
            clearTimeout(timer);
            timer = null;
            cache = [];
        },2000);
    }
})();

// 绑定点击事件
let checkbox = document.getElementsByTagName( "input" );
for(var i= 0, c; c = checkbox[i++];){
    c.onclick = function(){
        if(this.checked === true){
            proxy(this.id);
        }
    }
}


/*
//缓存代理
//计算乘积
let mult = function(){
    let result = 1;
    for(let i = 0,len = arguments.length;i < len;i++){
        result*= arguments[i];
    }
    return result;
}

//缓存代理
let proxy = (function(){
    let cache = {};
    reutrn function(){
        let args = Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        return cache[args] = mult.apply(this,arguments);
    }
})();*/
