// const person = {
//     name: "amit",
//     Age : "20"
// }

// // console.log(person.name ,person.Age);
// console.log(person);

// 2

// const person = [
//   {
//     name: "Amit",
//     age: 25,
//     mark : [1,2,3,4,5]
//   },
//   {
//     name: "Piyush",
//     age: 40,
//     mark : [1,2,3,4,5]

//   },
// ];

// person.map((v,i))
// console.log("person[0]    name" , person[0].name);
// console.log("person[0]    age" , person[0].age);
// console.log("person[1]    name" , person[1].name);
// console.log("person[1]    age" , person[1].age);

// person.map((personData) => {
//   console.log("personData name => ", personData.name);
//   console.log("personData age => ", personData.age);
//   console.log("personData mark => ", personData.mark[3]);
// });

// const arr = [10, 20, 30, 40, 50, 60];
// const value = arr[4];
// // const value = 50
// console.log(value);
// console.log("arr", arr);

//  arr=arr[4];

// console.log(arr);

// let ans=arr.slice();

// console.log(arr,ans);

// **********************************************  3

// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
//     ,

//     {
//         name: "Amits",
//        age: 29,
//        course: [
//            "c lan",
//            "html language"
//        ]
//     }
// ]  

// person.map((v) => {

//     console.log(v.name ,v.age , );
//     v.course.map((vcourse) => {
//         console.log(vcourse);
        
//     })
    
    
    
// })


// ***************************************** 5

const person =[
    {
        name:"amit",
        age:19,
        course:{
            c1: "c",
            c2: "html"
        }
    },
    {
        name:"mayuri",
        age:20,
        course:{
            c1: "c",
            c2: "html",
        }
    }
];

// person.map((pdata) => {

//     console.log(pdata.name ,pdata.age , pdata.course);


//     for (let k in pdata.course) {
//         console.log(pdata.course[k]);
        
//     }

// })


// ********************************************** 6 


// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }


// for (let k in data) {
//     console.log(data[k]);


//     if (k === "personal_info") {
//         console.log(data[k].name ,data[k].age , data[k].city);
        
//     } else if (k === "courses" ) {
//         data[k].map((lang) => {
//             console.log(lang);
            
//         })
//     } else if (k === "branches") {
//         for (let j in data[k]) {
//             console.log(data[k][j]);
//             for (let z in (data[k][j]) ) {
//                 console.log((data[k][j][z]));
                
//             }
//         }
//     }
    
// }



// ****************************************** 7 


let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    // {
    //     name: 'XYZ IT Institute',
    //     seat: [
    //         {
    //             react: 0,
    //             node: 70,
    //             full_stack: 0,
    //             ui_ux: 10
    //         },
    //     ]
    // },
    // {
    //     name: 'PQR IT Institute',
    //     seat: [
    //         {
    //             react: 7,
    //             node: 0,
    //             full_stack: 0,
    //             ui_ux: 0
    //         },
    //     ]
    // },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 880,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]
 

institues.map((course) => {
    console.log(course.name);

    course.seat.map((v) =>{
        console.log(v.react , v.node ,v.full_stack, v.ui_ux);
        
    })


})



  // institues.map((seet1) =>{
    //     console.log(seet1.seat);
        
    // })