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

var arr = ["xioaoxin",18,"男"]
var div = document.getElementById("container")
var d = document.getElementsByClassName("content")
var tag = document.getElementsByTagName("div")
var input = document.getElementsByName("text")
var id = document.querySelector("#container")
var cla = document.querySelectorAll(".content")
var body = document.body
var html = document.documentElement
var head = document.head
var title = document.title

div.innerHTML = "<p>大帅比<p>"
d.innerText = "<span>小帅比<span>"