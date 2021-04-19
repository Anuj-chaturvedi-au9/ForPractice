// // var upper = 7
// // var lower = 1

// // var val = Math.floor(Math.random()*(upper-lower) + lower);

// // console.log(val)

// // const array1 = ['rachna', 'piyush', 'ayush', 'anuj'];

// // // pass a function to map
// // const map1 = array1.map(x => x == 'anuj');

// // console.log(map1);
// // const family = [{
// //     pName : 'rachna',
// //     isSingle: false,
// // },{
// //     pName : 'piyush',
// //     isSingle: false,
// // },{
// //     pName : 'ayush',
// //     isSingle: true,
// // },{
// //     pName : 'anuj',
// //     isSingle: true,
// // }]

// // let single = family.filter((member)=>{
// //             return member.isSingle === true
// //     })
// // console.log(single);

// s = 'anujha'
// s.forEach(element => {
//     console.log(element);
// });


let a = true;
let b = 0;

setTimeout(() => {
    a= false
}, 2000);
// case#2
setInterval(() => {
    if (a) {
        console.log(b++);
    }
}, 200);

// case#1
// while (a) {
//     console.log(b++);
// }


// let b = 0;
// let c = setInterval(() => {
//     console.log(b++);
// }, 200);

// setTimeout(() => {
//     clearInterval(c)
// }, 2000);




