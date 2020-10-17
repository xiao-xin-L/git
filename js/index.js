// var a = 1
// for(;a<10;){
//     a++
//     console.log(a)
// }
// var obj = {
//     "name": "xiaoxin",
//     "age": 18,
//     "sex": "男"
// }

// var arr = ["xioaoxin",18,"男"]
// var div = document.getElementById("container")
// var d = document.getElementsByClassName("content")
// var tag = document.getElementsByTagName("div")
// var input = document.getElementsByName("text")
// var id = document.querySelector("#container")
// var cla = document.querySelectorAll(".content")
// var body = document.body
// var html = document.documentElement
// var head = document.head
// var title = document.title

// var input = document.querySelector("input")
// var input = document.querySelector("input")

// div.innerHTML = "<p>大帅比<p>"
// d.innerText = "<span>小帅比<span>"

// console.log(input.getAttribute("id"))
// console.log(input.setAttribute("new-name","xiaoxin"))
// var html = document.documentElement

// // function onclick(){
// //     alert("哈哈哈")
// // }
// // input.onclick = onclick
// function ondblclick(){
//     confirm("你确定吗?")
// }
// input.ondblclick = ondblclick

// function onmouseenter(){
//     prompt("请输入姓名:")
// }
// input.onmouseenter = onmouseenter
// function onmousemove(){
//     console.log("你好世界")
// }
// html.onmousemove = onmousemove

// let btn = document.querySelectorAll("input")
// let div = document.querySelector("div")

// function btn1(){
//     div.style.backgroundColor = "red";
// }
// function btn2(){
//     div.style.backgroundColor = "green";
// }
// function btn3(){
//     div.style.backgroundColor = "yellow";
// }
// btn[0].onclick = btn1
// btn[1].onclick = btn2
// btn[2].onclick = btn3


var a = 1;
// for (var i = 0;i<a;i++){
//     console.log(i)
// }
while (true) {
    a += 1;
    console.log(a);
    if (a > 11) {
        break
    }
}
// var body = document.body
// for(var i = 1;i<=9;i++){
//     for (var j = 1;j<=i;j++){
//         body.innerHTML = j+"x"+i+"="+i*j+"<br>"
//     }
// }

// 语句1
// if (判断条件) {
//     语句2
// } else {
//     语句3
// }
// 语句4

// 语句1
// if (判断条件) {
//     语句2
// }
// 语句3

// 语句1
// if (判断条件) {
//     语句2
// }
// if (判断条件) {
//     语句3
// }
// 语句4

// 语句1
// if (判断条件) {
//     语句2
// } else if (判断条件) {
//     语句3
// } else {
//     语句4
// }
// 语句5

// 语句1
// for (初始值; 判断条件; 语句2) {
//     语句3
// }
// 语句4

// 语句1
// while (判断条件) {
//     语句2
// }
// 语句3

// 语句1
// do {
//     语句2
// } while (判断条件)
// 语句3

// var a = 100;
// for (var i = 0; i < a; i++) {
//     console.log(i)
// }


// var content = document.querySelector(".content")

// for(var i = 0;i<=9;i++){
//     for(var j = 0;j<=i;j++){
//         content.innerHTML = j + "x" + i + "=" + j*i + "<br>"
//     }
// }
// var x = 10;
// switch (x) {
//     case 1:
//         console.log(x);
//         break;
//     case 2:
//         console.log(x);
//         break;
//     case 3:
//         console.log(x);
//         break;
//     case 4:
//         console.log(x);
//         break;
//     case 5:
//         console.log(x);
//         break;
//     default:
//         console.log(10);
// }
// arr = [1,2,3,45,6,78,9,10]
// for (var i in arr){
//     console.log(arr[i])
// }

var obj = {
    name: "xiaoxin",
    age: 18,
    sex: "nan",
}
var arr = [1, 2, 546, 24, 8, 1, 56, 13, 5, 46, 4, 6, 631, 3, 4];
var a = [];
var b = 0;

for (var i = 0; i < 15; i++) {
    a = arr[i + 1];
    if (b === arr[i]) {
        console.log("hello world");
    } else if (b === arr[i + 1]) {
        console.log("nihao shijie");
        while (true) {
            switch (b) {
                case 0:
                case 1:
                case 2:
                    console.log("halou");
                    break;
                case 5:
                    console.log("exit");
                    break;
                default:
                    console.log("morenzhi");
                    break
            }
            for (var j = 0; j < b; j++) {
                b = arr[i + 5];
                console.log(b);
                if (b === arr[i + 9]) {
                    console.log(b);
                } else {
                    for (var k = 0; k < 20; k++) {
                        for (var n in arr) {
                            console.log(arr[n]);
                        }
                    }
                }
            }
        }
    }
}