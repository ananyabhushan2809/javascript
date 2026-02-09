// array specific loops


// ["", "", ""]
//[{}, {}, {}]


// 1)  **********************for of loop**********************
//const arr = [1,2,3,4,5]
// const arr =["flash", "batman", "superman", "wonderwoman", "aquaman"];
// for(const element of arr)
// {
//     console.log(`value is : ${element}`);
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//    console.log(`each char is ${greet}`) ;
// }

// maps- known for unique values and it is not iterable like array

// const map = new Map();
// map.set('IN',"INDIA");
// map.set('USA',"UNITED STATES OF AMERICA");
// map.set('FR',"FRANCE");
// console.log(map);


// const map = new Map();
// map.set('IN',"INDIA");
// map.set('USA',"UNITED STATES OF AMERICA");
// map.set('FR',"FRANCE");
// for(const [key, value] of map)
// {
//     console.log(`key is ${key} and value is ${map.get(key)}`);
// }


// const map = new Map();
// const myObject=
// {
//     'game1': 'NFS',
//     'game2': 'FIFA',
// }
// for(const [key, value] of Object.entries(myObject))
// {
//     console.log(`key is ${key} and value is ${value}`);
// }




// 2) **********************for in loop**********************
// it is used to iterate over object properties
 


// const myObj =
// {
//     js: 'javascript',
//     py: 'python',
//     rb: 'ruby',
//     cpp: 'c plus plus',
//     swift: 'swift language'
// }

// for (const key in myObj) {
   
//     console.log(myObj[key]);
// }
 
//OR

// const myObj =
// {
//     js: 'javascript',
//     py: 'python',
//     rb: 'ruby',
//     cpp: 'c plus plus',
//     swift: 'swift language'
// }

// for (const key in myObj) {
   
//     console.log(`key is ${key} and value is ${myObj[key]}`);
// }


// const programming= ["js", "rb", "py", "cpp", "swift"];
// for(const key in programming)
// {
//     console.log(`index is ${key} and value is ${programming[key]}`);
// }

//or

// const programming= ["js", "rb", "py", "cpp", "swift"];
// for(const key in programming)
// {
//     console.log(programming[key]);
// }


// for in loop doesn't work on maps as it is not an object
// const map = new Map();
// map.set('IN',"INDIA");
// map.set('USA',"UNITED STATES OF AMERICA");
// map.set('FR',"FRANCE");
// for (const key in map) {
//     console.log(key);
// }

