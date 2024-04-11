 //  singleton  // constructor function
 // Object.create // singleton  with prototype chaining


 // object literals {} // factory function

 const mySym= Symbol('key1')
 const JsUse={
     myName:"Ankit",
     age: 20,
     "full name": "Ankit kumar",
     [mySym]:"I am a symbol",
     location: 'Bihar',
     email:"@gmail.com",
     isLoggedIn: false,
     lastLoginDays:["Monday","Friday"]
 }


 // there are two methods to access the object 
 // 1st  method using dot notation .

 console.log(JsUse.myName); 

 // 2nd method using square bracket and this is used by developer 
 console.log(JsUse["myName"]);
 console.log(JsUse['age']);
console.log(JsUse["full name"]); // there is only one way to access this property is square bracket 

console.log(JsUse[mySym]);//symbol can be accessed in any format but it will always return undefined