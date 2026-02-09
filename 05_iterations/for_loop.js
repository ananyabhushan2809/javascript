// *****************for loop****************************

// for(let index =0; index < 10 ; index++)
// {
//     const element = index;
//     if(element ==5)
//     {
//         console.log("5 is best number");
//     }
//     console.log("element value is : " + element);
// }


// for(let index =0; index < 10 ; index++)
// {
//     console.log(`outer loop value: ${index}`);
//     const element = index;
//     for(let j=0; j<10; j++)
//     {
//     console.log(`inner loop value: ${j} and outer loop value: ${index}`);
// }
// }

// *****************nested for loop(TABLES)****************************

// for(let index =0; index <= 10 ; index++)
// {
//     console.log(`outer loop value: ${index}`);
//     const element = index;
//     for(let j=0; j<=10; j++)
//     {
//     //console.log(`inner loop value: ${j} and outer loop value: ${index}`);
//     console.log(index + '*' +j + '=' + (index*j));
// }
// }

// let myArray =["flash", "batman", "superman", "wonderwoman", "aquaman"];
// console.log(myArray.length);
// for(let index = 0; index < myArray.length ; index++)
// {
//     const element = myArray[index];
//     console.log(element);
// }

// *****************key words****************************
// 1) break
// for(let index =0; index <=20 ; index++)
// {
//     if(index == 5 ){
//         console.log("detected 5")
//         break;
//     }
//     console.log(`value of i is ${index}`);

// }

// 2) continue
// for(let index =0; index <=20 ; index++)
// {
//     if(index ==5)
//     {
//        console.log(`detected 5`);
//        continue; 
//     }
//     console.log(`value of i is ${index}`);
// }