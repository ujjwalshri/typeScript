// let num1 : number = 3;
// console.log(num1);

// type giving to arrays  in typeScript 

// function add(numbers){
//    return numbers.reduce((acc, number)=>{
//       return acc+number;
//     } ,0 )
// }


// console.log(add([2,2,2]));


// const user = {
//     name: "ujjwal", 
//     age: 12,
//     number : 23432432,
// }
// console.log(user.)




// ---->>> type alias ----->>>




// type User = {
//    name : string,
//    age : number,
//    email?: string 
// }



// function login(user : User) : User {
//     return user;
// }
// const user =  {
//     name : "ujjwal", 
//     age : 12
// }

// console.log(login(user));


// custom types 

// type id = number | string ;
// const userID : id = '123';
























// ----->>> Interfaces----->>



// interface Posts{
//     postLikes : number, 
//     postComment: number, 
//     postShares : number
// }


// interface User {
//     name : string, 
//     id:string, 
//     password: string, 
//     posts : Posts[]
// }

// const post1 : Posts = {
//     postLikes : 20, 
//     postComment: 1, 
//     postShares : 1,
// }
// const post2 : Posts = {
//     postLikes : 200, 
//     postComment: 11, 
//     postShares : 9,
// }

// const user1 : User = {
//     name : "Ujjwal",
//     id : "ujjwal221", 
//     password : "sgsg", 
//     posts : [post1, post2]
// }

// console.log(user1.);




















// // ----->>> extends keyword in interfaces -->>>>


// interface Animal {
//     name : string, 
//     age : number
// }

// interface Human extends Animal{
//     walk : boolean,
//     run : boolean, 
//     talk: boolean, 
//     secondName : string
// }

// const aman : Human = {
//     name : "aman", 
//     age : 10, 
//     run : true, 
//     walk: true, 
//     talk : true, 
//     secondName: "sharma"
// }

// console.log(aman);