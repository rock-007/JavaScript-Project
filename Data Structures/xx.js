// let strk = " \n i am fine \n , \n and how are you \n"

// // ////console.log(strk.split("\n"));

// // ///console.log(strk.trim().split('\n'));
// // let x2= strk.trim().split('\n')
// // console.log(x2);


// // strk.trim().split('\n').map(string => {
// //     console.log(string);

// //     let x1= string.trim();
    
// //     //console.log(x1);

// // });

// function vowelsAndConsonants(s) {
//     //  console.log(s);
//    let s1 = s.split("")
//   console.log(s1)
//     //console.log(s[0])

//        let i;
//        for(i=0; i<s.length; i++){
//       // console.log("gadd")}
//       console.log(s1[i]) ;
   
//        } 
//        return   console.log("SDFA") }

//        let cc =vowelsAndConsonants("abcdef") 
// //console.log(cc);

function factorial(valu){
    let total =1;
  if(valu===0 || valu ===1) return total;
//console.log(typeof(valu))
total = total * valu
let valu1 = valu-1


factorial(valu1)
}


console.log(factorial(3))
