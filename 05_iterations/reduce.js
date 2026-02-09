// Sum all the values in an array using REDUCE

// const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`accumulator is ${acc} and current value is ${currval}`);
//     return acc + currval;
// }, 0)
// console.log(myTotal); 
// //6

// Example explained

// const array1 =[1, 2, 3, 4,];
// //0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);
// expected output: 10

// Sum all the values in an array using REDUCE with arrow function


// const myNums = [1,2,3]  
// const myTotal = myNums.reduce( (acc,currval) => acc + currval , 0)
// console.log(myTotal); 

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "mob dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
    
// const pricetopay = shoppingCart.reduce((acc,item) => acc +item.price,0)
// console.log(`Total price to pay is ${pricetopay}`);