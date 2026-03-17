//Array Declearation //
const myArr = [10,1,2,3,4,5];
console.log(myArr[0]);

const myName = ["Rohan","Santosh"];
console.log(myName);

//Array Operations//

myName.push("Lokhande");       //Push means Add Data
console.log(myName);
myName.push("Hello");
console.log(myName);
myName.pop();                 //Pop means remove Data from last 
console.log(myName);
myName.unshift("Mr");        //unshifted means add data in first 
console.log(myName);
myName.shift();
console.log(myName);        //Shift means remove first element

console.log(myName.includes("Rohan"));     //Search in Array
console.log(myName.indexOf("Rohan"));      //Search on index Value

