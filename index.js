// alert("test")

// var obj = {
//     name: "asd",
//     fn: function(){

//     }
// };
// obj.name = "zxc";

// function Person (n, age) {
//     // this.name = n;
//     // this.age = age;
//     this.eat = function(){
//         console.log("eating");
//     }
// }

// function Student(){

// }
// Student.prototype = new Person();
// var stu = new Student();

// var p1 = new Person("asd", 12);
// var p2 = new Person("azx", 15);
// console.log(p1, p2)
// var p1 = {};

function Human (){
    this.eat = function(){
        console.log(this);
        console.log("eating")
    }
    this.sleep = function(){
        console.log("sleeping")
    }
}
function Parent(){
    this.walk = function(){
        console.log(this)
        console.log(this.name + " is walking")
    }
    
    this.talk = function(){
        console.log("talking")
    }
}
Parent.prototype =new Human();
function Child(n){
    this.name = n
}
// var h1 = new Human();
Child.prototype = new Parent();
Child.prototype.num = 12;
var c1 = new Child("a");
var c2 = new Child("b");
var c3 = new Child("c");
// c1.walk();
// course.walk();
// c1.walk()
// c2.walk()
// c3.walk()
// walk(12);
// walk(c2);
// walk(c3);

// var prototype = {name: "A"}
// prototype = {age: 10};

// obj2 = obj1;
// obj2.name = "B"
// obj
// var a = 10;
// b = a
// b = 20

// [
//     a: 10
//     b: 20
// ]

// [
//     obj1: x
//     x name="xyz", age=10, 
//     obj2: x
// ]
// obj2 = 0bj1
// obj2.name = "zxc"
// obj1.name
// recursion function
// callback function
// higher order function
// self calling function

// lamda function
// pure/impure function
