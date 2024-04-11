"use strict";
const { use } = require("bcrypt/promises");

 // treat all JS code as newer version

// data types

// number
// string
//boolean
//null => standalone value
//undefined
// symbol
//not defined

// object

// console.log(typeof null); // object;
// console.log(typeof undefined); // undefined

//  conversionOperation in js

let score = "33aaa";
// console.log(typeof score);
// console.log(typeof(score));

let val = Number(score);
// console.log(val);
// console.log(typeof val);

// null=0;
//undefined = NaN;
// true => 1; false=>0

//  **************** Operations **********

let value = 3;
let negValue = -value;
//  console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(3%2);
// console.log(4/2);

let str1 = "Ankit";
let str2 = " Kumar";
let str3= str1 + str2;
// console.log(str3);

// console.log('1' + 2);  //12
// console.log(1 + '2');  //12

// console.log ('1' + 2 + 2);  //122
// console.log (1+2 + '2');     //

// console.log(null > 0);   // false
// console.log(null == 0);   // false
// console.log(null >= 0);    //true


// console.log(undefined ==0);
// console.log(undefined === 0) ;
// console.log("2" ===  2 );   //false





// ********** datatypes ***********

// Primitive   (used stack memory) 

// 7 types : String, Number, Boolean, NULL, undefined , symbol, bigint     /call by value


// Reference(Non primitive) (heap memory)

//Array , Objects , Functions

const heros=['Ankit', 'Rohit','Raj'];
// console.log(heros[0]);

let myObj = {
    name:  'ankit',
    age: 21
}

// console.table(myObj);

const myFunction = function(){
    console.log("Hello World");
}
//  console.log(typeof heros);


// *****************************************

// memory  

//stack(Primitive), Heap (Non-Primitive)
 // heap
let userOne = {
    email: "user@google.com",
    password:"password"
}

let userTwo = userOne;

userTwo.email="ankit@google.com";
// console.log(userOne.email);
// console.log(userTwo.email);


// stack 

let myName= "Rohit";

let myNickName = myName;
myNickName ="Ankit";
// console.log(myName);
// console.log(myNickName);





// *********************** String in JavaScript *************

  const name='Ankit';
  const  age=25;

  //console.log(name +" "+age);

  //console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String ('Ankit-hc-coma')
//console.log(gameName[5]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('k'));
// console.log(gameName.lastIndexOf('a'));
// console.log(gameName.substring(0,4)) ; // cannot contain negative value if we give negative then   it will consider from beginning of the string
// console.log(gameName.slice(1,6));
// console.log(gameName.slice(-8,6));

// trim to remove extra whitespace at the end and start

const  str="   Hello World!    ";
// console.log(str);
// console.log(str.trim());

// replace  method
const url="https://ankit.com/ankit%20kumar";
// console.log(url.replace("%20","-")); 
// console.log(url.includes('ankit'));


// split method  convert string  into array
//console.log(gameName.split('-'));



// **********************  Number and Maths **************

const marks = 700
//console.log(marks);


// specially specified  number methods
const mark = new  Number (90)
// console.log(mark);

// console.log(mark.toString().length);
// console.log(mark.toFixed(2));

const otherNumber= 123.8966;
//console.log(otherNumber.toPrecision(4));


const hundreds =10000000;
//console.log(hundreds.toLocaleString('en-IN'));


// *********************** Maths  Methods ********************


// console.log(Math.abs(-50)); // returns absolute value of a given number
// console.log(Math.ceil(78.3)); //returns the smallest integer greater than or equal to a
// console.log(Math.floor(78.3)); // returns the largest integer less than or equal to a
// console.log(Math.round(78.3)) // rounds the number to the nearest integer, optionally to an integer with decimals



// console.log(Math.random()); 
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10) + 1);

const min=10;
const max=20;

//console.log(Math.floor(Math.random() * (max-min + 1)) + min);




// ********************* Date and time ********************


 let myDate= new Date();
//  console.log(myDate);
//  console.log(myDate.getDay()); // it will return day of week [0-6]
//  console.log(myDate.getDate()); //it will return

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());


// console.log(typeof myDate);

let myNewDate = new  Date(2000,10,14);
// console.log(myNewDate.toLocaleString());
// console.log(myNewDate.toDateString());

// ******* timestamp in js to find accurate time  uses  in quiz , poll etc*************


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());  // date in millisecond

//console.log(Math.floor(Date.now()/1000));





