
const myArr =[0,1,2,3,4,5]
//console.table(myArr);

// Array Method

// 1) push (add values in array)
// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9) // add value at the beginning of an array
//myArr.shift() // remove the first value from the array 

//console.log(myArr); // [0, 1, 2, 3, 4,  5, 6]

// console.log(myArr.indexOf(3)); // return the index position of a specific element
// console.log(myArr.includes(9));

// const newArr = myArr.join()   // convert array object in string
// console.log( typeof myArr); // type of object 
// console.log( typeof newArr); // typeof string


// slice , splice


console.log('A' , myArr);

const myn1 = myArr.slice(1,3); // it does not maupilate the original array and it excludes last value
console.log(myn1);
console.log('B', myArr);


const myn2 = myArr.splice(1,3); // it manipulate the original array and it includes the last value
console.log('c',myArr);
console.log(myn2);
