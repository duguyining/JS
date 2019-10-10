/*
//生成promise实例
const promise=new Promise(function (resolve,reject) {
    //...some code
    if (/!*success*!/){
        resolve(value);
    } else{
        reject(error);
    }

});

promise.then(function(value) {
    // success
}, function(error) {
    // failure
});*/


/*

function timeout(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value)=>{
    console.log(value);
});*/


/*
//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve,reject) {
        const image=new Image();

        image.onload=function () {
            resolve(image);
        };

        image.onerror=function () {
            reject(new Error('could not load image at'+url));

        };
        image.src=url;
    });
}*/


//
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });

    return promise;
};

getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
}, function(error) {
    console.error('出错了', error);
});