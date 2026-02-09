//forEach traditional function- DOES NOT RETURN VALUES

// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
// coding.forEach(  function  (item){
//     console.log(item);
// } )


//forEach arrow function
// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
// coding.forEach( (item) => {
//     console.log(item);
// } )


// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
// function printMe(item)
// {
//     console.log(item);
// }
// coding.forEach(printMe);

// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
// coding.forEach( (item,index, arr) =>
// {
//     console.log(item,index,arr);
// })

// ["", "", ""]
//[{}, {}, {}]

// const mycoding=[
//     {
//         languagename: 'JavaScript',
//         languagefilename: 'js'
//     },
//     {
//         languagename: 'java',
//         languagefilename: 'java'
//     },
//     {
//         languagename: 'python',
//         languagefilename: 'py'
//     }
// ]
// mycoding.forEach( (item) =>
// {
//     console.log(`language name is ${item.languagename} and file extension is ${item.languagefilename}`);
// } )


// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
// const values = coding.forEach( (item) =>
// {
//     console.log(item);
//     return item;
// })
// console.log(values); //undefined



//filter- RETURNS VALUES

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num>4)
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) =>{
//     return num>4
// } )
// console.log(newNums);


//using forEach to achieve the same result as filter
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = [];

// myNums.forEach( (num) =>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981,
//         edition: 2004}, 
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
//         edition: 2008}, 
//     { title: 'Book Three', genre: 'History', publish: 1999,
//         edition: 2007}, 
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
//         edition: 2010},     
//     { title: 'Book Five', genre: 'Science', publish: 2009,
//         edition: 2014}, 
//     { title: 'Book Six', genre: 'Fiction', publish: 1987,
//         edition: 2010},
//     { title: 'Book Seven', genre: 'History', publish: 1986,
//         edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011,
//         edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
//         edition: 1989},
//     ];


//    let userBooks = books.filter((bk)=>bk.genre ==='History')
//    userBooks = books.filter((bk) =>{
//     return bk.publish >=1995 && bk.genre ==='History'
//    })

//    console.log(userBooks);
 


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map((num) => num+10)
// console.log(newNums);


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNums = myNumers.map().map( (num) => {return num+10})
// const newNums = myNumers
//                 .map( (num) => num*10)
//                 .map((num)=>num +1)
//                 .filter((num) => num>=40)
// console.log(newNums);

// output 
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

