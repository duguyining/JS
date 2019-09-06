function ajax (url, callback){
    var req = new XMLHttpRequest();

    req.onloadend = callback;
req.open('GET', url, true);
req.send();
};

console.log(1);


ajax('/api/xxxx', function(res){
    console.log(res);
});
console.log(2);