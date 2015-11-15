function toggleMenu() {
    document.getElementById("header").classList.toggle("open");
    document.getElementById("toggle").classList.toggle("x");
    document.getElementById("菜单项").classList.toggle("显示");
}
function closeMenu() {
    if (document.getElementById("header").classList.contains("open")) {
        toggleMenu();
    }
}
document.getElementById("toggle").addEventListener("click", toggleMenu);
window.addEventListener("resize", closeMenu);
function slide(){
    var oBox=document.getElementById("slide");
    var index=1;
    function slideMove(){
        var target=parseInt(getStyle(oBox,"width"))/4;
        if(index!=3){
            move(oBox,{"left":-index*target},30);
            index++;
        }else{
            move(oBox,{"left":-index*target},30,reset);
            function reset(){
                oBox.style.left=0+"px";
                index=1;
            }
        }
    }
    setTimeout(slideMove,2500);
    function begin(){
        timer=setInterval(slideMove,4000);
        oBox.onmouseover = function () {
            clearInterval(timer);
        }
        oBox.onmouseout = function () {
            timer = setInterval(slideMove,4000);
        };
    }
    setTimeout(begin,2500);
}slide();
function gallery() {
    var pic = document.getElementById("图库1");
    var minPic = pic.getElementsByTagName("li");
    for (var i = 0; i < minPic.length; i++) {
        minPic[i].firstChild.onclick = function () {
            replace(this);
        }
    }
    function replace(img) {
        var bigPic = document.getElementById("图库1-1");
        bigPic.src = img.src;
        var picLink = document.getElementById("piclink");
        picLink.href = img.src;
    }
    var oUl = document.getElementById("roller");
    roller(oUl,pic,3,1)
}gallery();
//自适应无缝滚动框架说明：（需要配合获取元素框架）
//roller(总容器,可见部分容器,总容器与可见容器宽度比值,运动速率)
function roller(total,view,n,rate){
    function fit() {
        total.style.width = parseInt(getStyle(view,"width")) * n + "px";
    }
    fit();
    window.addEventListener("resize", fit);
    var timer = setInterval(roll, 30);
    function roll() {
        total.style.left =parseInt(getStyle(total,"left"))  - rate + "px";
        if (parseInt(getStyle(total,"left")) == -parseInt(getStyle(total,"width")) * (n-1)/n) {
            total.style.left = 0 + "px"
        }
    }
    total.onmouseover = function () {
        clearInterval(timer);
    }
    total.onmouseout = function () {
        timer = setInterval(roll, 30);
    };
}
// 获取元素属性框架说明：（为兼容IE 6 7 8）
// getStyle(元素,带获取属性)
function getStyle(box,attr){
    if(box.currentStyle){
        return box.currentStyle[attr];
    }else{
        if(getComputedStyle(box,null)[attr]=="auto"){
            return 0;
        }else{
            return getComputedStyle(box,null)[attr];
        }
    }
}
//多功缓冲能运动框架说明：（需要配合获取元素框架）
//move(运动物体，｛属性：目标值，属性：目标值。。。｝，运动速率，回调函数)
function move(box,json,rate,fnend){
    clearInterval(box.timer);
    box.timer = setInterval(moveBox, 30);
    function moveBox(){
        var mStop=true;
        for (var attr in json) {
            if(attr=="opacity"){
                box.current=Math.round(parseFloat(getStyle(box,attr))*100);
            }else{
                box.current=parseInt(getStyle(box,attr))
            }
            var distance=(json[attr]-box.current);
            var speed=distance/500*rate;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(speed<0&&speed>=-5){
                speed=-5;
            }else if(speed>0&&speed<=5){
                speed=5;
            }
            if((distance<=5&&distance>=0)||(distance<=0&&distance>=-5)){
                speed=distance;
            }
            if(parseInt(box.style[attr])!=json[attr]){
                mStop=false;
            }
            if(attr=="opacity"){
                box.style[attr]=(box.current+speed)/100;
                box.style.filter='alpha(opacity:'+(box.current+speed)+')'
            }else{
                box.style[attr]=box.current+speed+"px";
            }
        }
        if(mStop){
            clearInterval(box.timer);
            if(fnend)fnend();
        }
    }
}








