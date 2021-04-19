// //    //left
// // let str="abcde";
// // let arr=Array.from(str);
// // let left_shift=2;
// // let x=arr.splice(0, left_shift);
// // console.log([...arr,x].flat().join(""));

// // //right

// // let arr1=Array.from(str).reverse();
// // let right_shift=3;
// // let x1=arr1.splice(0, right_shift);
// // console.log([...arr1,x1].flat().reverse().join(""));
// function validInput() {
//    let myValue  = document.getElementById('p2').value;
   
//    let newValue = document.querySelector("#p2")
//    newValue.textContent = myValue

//    console.log(newValue);
//    console.log(myValue);
   
// }

let a = document.querySelector('.myForm').addEventListener(('submit'),(event)=>{
   event.preventDefault();
   // console.log(event.target.passwrd.value);
   // console.log(event.target.repeat.value);
      let z = event.target.passwrd.value
      let q = event.target.repeat.value

      if (z===q) {
         console.log('password accepted');
      } else {
         console.log('password does not match');
      }
  
   // event.target.passwrd.value = '';
   // event.target.repeat.value = '';
   
})
















