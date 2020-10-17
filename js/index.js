var a = 1
for(;a<10;){
    a++
    console.log(a)
}
var obj = {
    "name": "xiaoxin",
    "age": 18,
    "sex": "男"
}

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

let btn = document.querySelectorAll("input")
let div = document.querySelector("div")

function btn1(){
    div.style.backgroundColor = "red";
}
function btn2(){
    div.style.backgroundColor = "green";
}
function btn3(){
    div.style.backgroundColor = "yellow";
}
btn[0].onclick = btn1
btn[1].onclick = btn2
btn[2].onclick = btn3