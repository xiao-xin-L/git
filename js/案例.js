// var a = 40;
// if (a < 30 && a >= 0) {
//     console.log("b=1")
// } else if (a < 60 && a >= 30) {
//     console.log("b=2")
// } else if (a < 80 && a >= 60) {
//     console.log("b=3")
// } else if (a < 100 && a >= 80) {
//     console.log("b=4")
// } else (
//     console.log("有误")
// )


// {
//     var c = 1
// }
// console.log(c)

// var a = "foo1"
// var foo = function () {
//     var b = "foo2"
//     console.log(a, b)
// }
// foo()
// // console.log(a, b)

// var o = {
//     x: 1,
//     y: 2,
//     z: 3
// }
// var fn = function (obj) {
//     obj.x = 4
// }

// fn(o)

// var a = 10;
// var b = 20;
// function fn(x, y) {
//     x = x + 1;
//     y = y + 1;
//     console.log(x); // 11
//     console.log(y); // 21
// }
// fn(a, b)
// console.log(a); // 10
// console.log(b); // 20

// let arr=[1,2,5,456,45,89,5646,3,1]

// let b =[{x:1,y:2},"asd",123,undefined,null,true,false]
// let o={
//     x:[1,2,3,8,4568,45,745],
//     y:{
//         a:1,
//         b:2
//     },
//     z:undefined,
//     a:null
// }

// c = Object.defineProperty(o,"a",{
//     configurable: false
// })
// console.log(c)
// console.log(Object.getOwnPropertyDescriptor(o, "a"))


// var str = ["a","b","c","d","e","d","c","b","a"]
// str.indexOf("d") // 3
// str.lastIndexOf("d") // 5
// str.indexOf("d",4) // 5
// str.lastIndexOf("d",4) // 3


// let a = ["a",undefined, null,123,[1,2,3,4],{x:1,y:2}]
// // 数组的添加方法
// result = a.concat("b",["c",{z:3},["d"]]) // 不会改变原数组的内容
// console.log(result) // 返回一个新数组
// // 数组的分割方法
// result = a.slice(0,8) // 不会改变原数组得到内容
// console.log(result) // 返回一个分割后的新数组
// // 数组中最强大的方法 ,可以删除,插入,添加
// //a.splice(2,0,"a",{a:1}) // 会改变原数组  没有返回值
// // 数组的重排序方法
// //a.reverse() // 会改变原数组  返回排序后的新数组
// //a.sort()  //会改变原数组   返回排序后的新数组  没传入值时是按照ASCII码进行排序,无论数组内容是什么数据类型的值,排序前会先将所有值转化为字符串类型再进行排序
// // 数组的栈与队列操作 会改变原数组
// // 末尾添加操作
// result = a.push("asd") // 返回添加后数组的长度
// console.log(result)
// // 开头删除操作
// result = a.shift()  // 返回删除的那个值
// console.log(result)
// // 开头添加操作
// result = a.unshift("123")  // 返回添加后数组的长度
// console.log(result)
// // 末尾删除操作
// result = a.pop()  // 返回删除的那个值
// console.log(result)

// 封装末尾添加操作



// 数组的迭代方法 传参只能传一个函数
// every()  some()  forEach()  filter()  map()
// let arr = [1, 2, 5, 3, 86, 47, 45, 8, 5, 5, 5, 6]
// // 所有项都为true则返回true,一个为false则返回false
// // return 一个条件
// let a = arr.every(function (value, index, array) {
//     return value > 100, index > -1
// })
// console.log(a)  // 返回布尔值
// a = arr.some(function (value, index, array) {
//     // console.log(value)
//     return value > 100, index > 10
// })
// console.log(a)  // 返回布尔值
// // return 一个条件
// a = arr.filter(function(value,index,array){
//     return value>5
// })
// console.log(a)  // 返回一个新数组  将符合条件的值放在新数组里返回出来
// // return 一个表达式  经过一系列的运算
// a = arr.map(function(item,index,arr){
//     return arr[index]+10
// })
// console.log(a)  // 返回一个新数组  将运算之后的结果放在新数组里返回出来
// // 
// arr.forEach(function(item,index,array){
//     item+1
// })  // 没有返回值



// 定时器与延时器
// setTimeout(function () {
//     console.log(1)
// }, 1000);
// setInterval(function(){
//     console.log(2);
// },1000);


// let obj = {
//     x:1,
//     y:2,
//     z:function(o){
//         console.log(this)
//         console.log(this.z)
//     }
// }

// obj.z(obj)

// let str = "asdfdggjhzxcbnewyu"
// let str1 = "htrsnvcbxiurt"
// result = str.concat(str1, str1[0])
// console.log(result)

let oUl = document.querySelector(".ullist")
let li1 = document.querySelectorAll(".ullist>li")

let oOl = document.querySelector(".ollist")
let li2 = document.querySelectorAll(".ollist>li")

let oDiv = document.querySelector("div")
let body = document.body
let html = document.documentElement
// let doc = document.document
// oDiv.onclick = function(a){
//     console.log(a)
// }

oDiv.addEventListener("click",function(){
   console.log("div被点击了")
},false)
body.addEventListener("click",function(){
    console.log("body被点击了")
 },false)
 html.addEventListener("click",function(){
    console.log("HTML被点击了")
 },false)
 document.addEventListener("click",function(){
    console.log("document被点击了")
 },false)
