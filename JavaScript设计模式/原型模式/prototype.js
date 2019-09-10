/*
//图片轮播类
var LoopImages=function (imgArr,container) {
    this.imagesArray=imgArr;
    this.container=container;//轮播图图片容器
    this.createImage=function () {}//创建轮播图片
    this.changeImage=function () {}//切换下一张图片
};

//上下切换类
var SlideLoopImg=function (imgArr,container) {
    LoopImages.call(this,imgArr,container);
    this.changeImage=function () {
        console.log('SlideLoopImage changeImage container');
    }
};

//渐隐切换类
var FadeLoopImage=function (imgArr,container,arrow) {
    LoopImages.call(this,imgArr,container);
    this.arrow=arrow;
    this.changeImage=function () {
        console.log('FadeLoopImg changeImage function');
    }
};


//实例化一个渐隐切换图片类
var fadeImg=new FadeLoopImage(['01.jpg','02.jpg'],'slide',['left.jpg','right.jpg']);
fadeImg.changeImage();*/


//图片轮播类
var LoopImages=function (imgArr,container) {
    this.imagesArray=imgArr;
    this.container=container;//轮播图图片容器
};

LoopImages.prototype={
    createImage:function () {
        console.log('LoopImage createImage function');
    },
    changeImage:function () {
        console.log('LoopImage changeImage function');
    }
}


//上下切换类
var SlideLoopImg=function (imgArr,container) {
    LoopImages.call(this,imgArr,container);
};

SlideLoopImg.prototype=new LoopImages();
SlideLoopImg.prototype.changeImage=function () {
    console.log('SlideLoopImage changeImage container');
};


//渐隐切换类
var FadeLoopImage=function (imgArr,container,arrow) {
    LoopImages.call(this,imgArr,container);
    this.arrow=arrow;
};

FadeLoopImage.prototype=new LoopImages();
FadeLoopImage.prototype.changeImage=function () {
    console.log('FadeLoopImg changeImage function');
};


//test测试
var fadeImg=new FadeLoopImage(['01.jpg','02.jpg'],'slide',['left.jpg','right.jpg']);
console.log(fadeImg.container);
fadeImg.changeImage();

