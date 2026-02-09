// Truthy and Falsy values in JavaScript

// Falsy values: false, 0,-0,BigInt 0n, "", null, undefined, NaN
// Truthy values: All values that are not falsy, for example:"0",'false'," ", "hello", 42, [], {}, function(){}, etc.

// const userEmail = "h@hitesh.ai"
// if (userEmail) 
//     {
//         console.log("got user email");
//     }
//     else
//     {
//        console.log("Don't have user email"); 
//     }

// *********************** Checking empty array or not **********************//
//     const UserEmail = []
// if (UserEmail.length ===0) 
//     {
//         console.log("array is empty");
//     }
//     else
//     {
//        console.log("array has some data"); 
//     }

// *********************** Checking empty object or not **********************//
// const emptyobj = {}
// if(Object.keys(emptyobj).length ===0)
// {
//     console.log("object is empty");
// }

// false ==0 // true
// false =='' // true
// 0=='' // true
// 0=='0' // true
// false =='false' // false 
// null ==undefined // true

// *******************************Nullish Coalescing Operator (??): null undefined*************************************

// It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.

//let val1;
// val1=5 ?? 10;
// val1= null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15
// val1 = null ?? undefined ??15
// console.log(val1); 

// ********************************ternary operator*******************************
// syntax : condition ? expr1 : expr2
//syntax : condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80? console.log("less than 80") : console.log("more than 80")