
//  console.error("This is an error");
//  console.warn("This is warning");
//  console.log("This is log");

var number = 34;
var number1 = 33;
//34 and 33 is operend

// console.log(number + number1);

var abc = "This is a string";
// console.log(abc +" "+ number1);

//Object example
var marks = {
    p1: "1",
    p2: "test",
    p3: "3"
}

var test;
var test1 = null;
// console.log(marks);
// console.log(test);

// Javascript data type types:
// 1. Primitive data type: undefined, null, number, string, boolean, symbol
// 2. Reference data type: Arrays, objects

var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr[2]);

//Arthmetric operator > +, - *, /
//Assignment operator > c -= 2 means c= c-2
//Comparison operator > x == y , this is to compare the values
//Logical operator > && and ||, logical not eg is (!false)
//Bitwise operator > | and &

//How to write functions in js

function average(a, b) {
    return (a + b) / 2;
}

console.log(average(1,2), average(38, 6775));