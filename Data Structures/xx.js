// // let strk = " \n i am fine \n , \n and how are you \n"

// // // // ////console.log(strk.split("\n"));

// // // // ///console.log(strk.trim().split('\n'));
// // // // let x2= strk.trim().split('\n')
// // // // console.log(x2);


// // // // strk.trim().split('\n').map(string => {
// // // //     console.log(string);

// // // //     let x1= string.trim();
    
// // // //     //console.log(x1);

// // // // });

// // // function vowelsAndConsonants(s) {
// // //     //  console.log(s);
// // //    let s1 = s.split("")
// // //   console.log(s1)
// // //     //console.log(s[0])

// // //        let i;
// // //        for(i=0; i<s.length; i++){
// // //       // console.log("gadd")}
// // //       console.log(s1[i]) ;
   
// // //        } 
// // //        return   console.log("SDFA") }

// // //        let cc =vowelsAndConsonants("abcdef") 
// // // //console.log(cc);

// // function factorial(valu){
// //     let total =1;
// //   if(valu===0 || valu ===1) return total;
// // //console.log(typeof(valu))
// // total = total * valu
// // let valu1 = valu-1


// // factorial(valu1)
// // }


// // console.log(factorial(3))


// function getSecondLargest(nums) {
//     // Complete the function
//   //  console.log(nums)

// let largenumber= nums[0];
// let secondlarge;


// for (var i=0; i<nums.length; i++){
// let currentvalue=nums[i]
//         if(currentvalue > largenumber){
//             secondlarge= largenumber;
//             largenumber=currentvalue;}
//         else if(currentvalue < largenumber && (currentvalue > secondlarge  || secondlarge == undefined) ){
// secondlarge=currentvalue;
//         }

// }
// return secondlarge;
// }
// x= [3,2]
// console.log(getSecondLargest(x))
let a=[9,5,9]
let b= [7,8,3]

function compareTriplets(a, b) {
        let an=0
        let bn=0
        let c=[]
        let j;
    for( j=0; j<a.length; j++ ){
    
        if (a[j]> b[j] && a[j]!= b[j]) an += 1;
            else if (a[j]< b[j] && a[j]!= b[j]) bn += bn;
            else if (a[j]= b[j] ) ;
            else ;
    
    
    
    
    
    }
    console.log(an,bn)

    let ann = Math.max(100,200)
    let bnn =Math.min(36, 44)
   
    c[0]= ann;
    c[1]= bnn;
        console.log(ann,bnn)
        
        return c;
    
    }

    console.log(compareTriplets(a,b))