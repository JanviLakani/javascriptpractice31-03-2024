
// push 1

// let arr=[10,20,30,40];

// let ans=arr.push(999);

// console.log(arr,ans);     // return length

// unshift 2

// let arr=[10,20,30,40,50];

// let ans=arr.unshift(555);

// console.log(arr,ans);       // return total length 

// splice 3

// let arr = [10,20,30,40];

// let ans=arr.splice(1,0,25,29);

// console.log(ans);             // ans me jo return hoga wo: [] (kyunki kuch delete nahi kiya) .... 

                              // Remove bhi karta hai

                              // Insert bhi karta hai

                              // Aur original array modify hota hai



// pop  4

// let arr = [10,20,30,40,50];

// let ans=arr.pop();

// console.log(ans);                   // last element ko hata deta or vo hi return karta hai .. like 50

// shift  5 

// let arr =[10,20,30,40,50];

// let ans=arr.shift();

// console.log(ans);                      // start vale element ko hata data or vohi return karta hai ... like 10

// splice  6

// let arr=[10,20,30,40,50,60];

// let ans=arr.splice(2,3,35,45,55);

// console.log(ans);               // delete array element return .. like 30,40,50


// slice 7 

// let arr = [10,2,30,50,40,80,10,6,8];

// let ans=arr.slice(3,3);  // 50,60

// console.log(arr,ans);  // 

// ************************************** 

// let arr = [10, 20, 30, 40, 50, 60];    // no change in originial array 
// let result = arr.slice(2, 5);
// console.log(arr,result);                //  return delete element 


// find 8

// let arr = [10,20,30,50,90];

// let ans=arr.find((v) => v>50);

// console.log(ans);          // condition je pass thai te first element return 


// some 9


// let arr = [54,60,87,90,78,50,20];

// let ans=arr.some((v) => v>100)

// console.log(ans);            // true or false return who pass condition 


// include 10

// let arr = [10, 50, 60,80,54,69,25];

// let ans= arr.includes(60);

// console.log(ans);          //element je function ma aapel chhe e hshe to true return


// map 11                        applied to each element of the original array. work thayel hoi e all ma

// let arr =[5,10,20,25,30,40];     //The original array is not modified.

// let ans=arr.map((v,i) => v+5);

// console.log(ans);


// filter  12

// let arr=[10,65,87,96,100,52,20];

// let ans=arr.filter((v,i) => v>90);

// console.log(ans);                      // condition ma je pass thaya chhe emne return kare chhe 


// reduce 13

// let arr = [10,20,30,40];

// let ans=arr.reduce((acc,v,i) => acc+v, 0);

// console.log(ans);                         // 3 pera meter need total ke multi karel value return kare chhe


// index  14


// let arr=[10,50,60,87,58,30,45];

// let ans=arr.indexOf(10);

// console.log(ans);           // index return kare 


// lastindexOf 15

let arr=[20,65,86,43,85];

let ans=arr.lastIndexOf(65);

console.log(ans);











