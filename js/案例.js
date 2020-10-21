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

let arr=[1,2,5,456,45,89,5646,3,1]

let b =[{x:1,y:2},"asd",123,undefined,null,true,false]
let o={
    x:[1,2,3,8,4568,45,745],
    y:{
        a:1,
        b:2
    },
    z:undefined,
    a:null
}

c = Object.defineProperty(o,"a",{
    configurable: false
})
console.log(c)
console.log(Object.getOwnPropertyDescriptor(o, "a"))