// let fName = 'Anuj'
// let lName = 'Chaturvedi'
// console.log("hello "+ fName + ' ' + lName);

// let tempInF = 100
// let tempInC
// tempInC = (tempInF-32)* (5/9)
// console.log(tempInC);

// console.log((tempInC > 40));

// let marcs = 5 ;
// if(marcs ===10){
//     console.log("great!!");
// }else if(marcs === 5){
//     console.log("good!!");
// }else if(marcs ===3){
//     console.log("poor!!");
// }else{
//     console.log("fail!!");

// // }

// let isVerfied = !false;
// let isLoggedIn = true;
// let hasPaymentDone = true;
// let guestUser = false;

// if (isLoggedIn && isVerfied && hasPaymentDone) {
//   console.log("has all course access!!");
// } else if (isVerfied || guestUser) {
//   console.log("free preview to the courses!!");
// } else {
//   console.log("Message : please register with us!!");
// }
// var isAGlobal = 'roman reigns';
// if(true){
//     var isALocal = 'jey uso';

//     console.log(isALocal);
//     console.log(isAGlobal);
// }
// isAGlobal = 'paul heyman'
// console.log(isAGlobal);


// let marvels = ['thor','captain America', 'spiderman' , 'ironman'];
// console.log(marvels);
// console.log(marvels[0]);
// console.log(marvels. );
// console.log(`we have ${marvels.lastIndexOf('spiderman')} Marvel Superheros!!`);


// const fullName = function (fName ,lName) {
//     console.log('welcome to LCO');
//     console.log(`Happy to have you ${fName} ${lName}`);
// }

// fullName('Anuj' ,'Chaturvedi');

// let adder =(num1, num2) => {return num1+num2} ;

// console.log(adder(45,5));


// let multi =(num1, num2 =5) => {return num1*num2} ;

// let t = multi(20, 10);
// let q = multi(10);
// console.log(t);
// console.log(q);
// console.log(t+q);

// let month = ['jan', 'feb', 'march','april','may','june','july','aug','sept','oct','nov','dec']

// month.forEach((mon,index) => {
//     console.log(`start with ${index + 1} : ${mon}`);    
// });

// for (let index = month.length; index >= 0; index--) {
//     const element = month[index];
//     console.log(`start with ${index} : ${element}`);    
// }

// let myTodos = []
// myTodos.push('go to hospital')
// myTodos.push('buy some fruit')
// myTodos.push('watch some videos on internet')
// myTodos.splice(1,2,'try to learn some JS stuff')

// for (let index = 0; index < myTodos.length; index++) {
//     const element = myTodos[index];
//     console.log(`my tasc no. ${index+1} to perform : ${element}`);
// }

// let grades = function (obtainmarcs,totalmarcs) {
//     // // let obtainMarcs
//     // let totalMarcs = 80

//     let percentage = (obtainMarcs/totalMarcs) * 100
//     let grade = ''
//     if(percentage > 80){
//         grade = 'great'
//     }else{
//       grade = 'fail'
//     }
//     return `your grade is ${grade} and your percentage is : ${percentage}`;
// }

// console.log(grades(63,80));

// let obj1 = {
//     name: 'xyz',
//     age: 22,
//     course: 'JS'
// }
// let name, age, course = { obj1 }
// console.log(obj1.age);
// console.log(course);

// let todos ={
//     day: "Monday",
//     meeting:0,
//     meetingDone:0,
//   }
  
  
//   let addMeeting = (todo,meet =0) =>{
//     todos.meeting = todos.meeting + meet;
//   }
  
//   let meetingCompleted = (todo,meet) =>{
//     todos.meetingDone = todos.meetingDone + meet;
//   }
  
//   let reset = (todo) =>{
//     todos.meeting = 0
//     todos.meetingDone =0
//   }
  
//   let meetingLeft = (todo) =>{
//    let left = todos.meeting - todos.meetingDone
//    return left
    
//   }
  
//   addMeeting(todos,4);
//   meetingCompleted(todos,2);
//   console.log(todos)
//   // reset(todos)
//   // console.log(todos)
//   let a = meetingLeft(todos)
//   console.log(a);
// var todos ={
//     day: "Monday",
//     meeting:0,
//     meetingDone:4,
//     addMeeting : function(meet){
//     this.meeting = this.meeting + meet;
//     },
//     reset : function(){
//     this.meeting = 0
//     this.meetingDone =0
//     },
//      meetingLeft : function(){
//      var left = this.meeting - this.meetingDone
//      console.log(left)
    
//     }
  
//   }
  
//   todos.addMeeting(6)
//   todos.meetingLeft()

// todos.reset()
// console.log(todos.meetingDone);
// console.log(todos.meeting)

// var upper = 7
// var lower = 1

// var val = Math.floor(Math.random()*(upper-lower) + lower);

// console.log(val)
// const array1 = ['rachna', 'piyush', 'ayush', 'anuj'];

// // pass a function to map
// const map1 = array1.map(x => x == 'anuj');

// console.log(map1);

// const family = [{
//     pName : 'rachna',
//     isSingle: false,
// },{
//     pName : 'piyush',
//     isSingle: false,
// },{
//     pName : 'ayush',
//     isSingle: true,
// },{
//     pName : 'anuj',
//     isSingle: true,
// }]

// const map1 = family.map(family => family.isSingle == true);
// console.log(map1);







