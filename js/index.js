
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

// console.log(average(1,2), average(38, 6775));

var array = [165, 573,4564, 46754, 4564];

for(var i =0;i<array.length;i++){
    //console.log(array[i]);
    array.push("test");
    array.pop();
  
}

array.forEach(element => {
    // console.log(element);
});

//let is better for memory management

let j =0;
// while(j<array.length){
//     console.log(array[j]);
//     j++;
// }

// do{
//     console.log(array[j])
//     j++
// }while(j < array.length)


//DOM manipulation

let doc = document.getElementById("click")

//doc.style.background = "yellow"
let className = document.getElementsByClassName("container");
className[0].style.background = "yellow";

//Below code is a way to add css class
doc.classList.add("myClass");

//Below code is to get inner HTML
//console.log(className[0].innerHTML);

//This is how we can create an element and append in container 
createdElement = document.createElement('p');
createdElement.innerText = "This is a paragraph";
className[0].appendChild(createdElement);

//Here We can also use replaceChild(firstElement, secondElement) or removeChild(element)
function submit(){
    //alert('This is button click');
}

window.onload = function(){
    //Do Something 
}

//Click event 
let button = document.getElementById("second-button");
//Below click is an event we can also use mouseover or mouseup instead
button.addEventListener('click', ()=>{
    button.textContent = "This is new content";
  // console.log("Clicked");
   
})

document.getElementsByClassName("container1")[0].innerHTML = "<p> This </p>";

//Call same method after certain interval
sum = () =>
{
    console.log("test");
}
//setInterval(sum, 1000);

//Local Storage
localStorage.setItem('name', 'tarun');
//console.log(localStorage.getItem('name'));
//localStorage.getItem('name');

//To clear
//localStorage.clear()

//Json

object = {"name": "Tarun", "age": 29}
//console.log(object);
//You can check type by typing typeof + name

stringValue = JSON.stringify(object);
console.log(stringValue);

parse = JSON.parse(stringValue);
console.log(parse);

console.log(parse.age)