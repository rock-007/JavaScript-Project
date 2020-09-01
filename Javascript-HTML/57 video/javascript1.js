// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');
// // by putting the below it will have global valuse and can be used globally
// const  patternxx = /^[a-z A-Z]{6,12}$/;

// // refernce the div class=feedback from html to here below
// const feedback =document.querySelector('.feedback');
// button.addEventListener('click',() => {
// // in the css we put popup-wrapper to non but once the click is happened it will chage to block i.e we can seee
//     popup.style.display = 'block';
// });
// close.addEventListener('click', () =>{

//     popup.style.display = 'none';

// });

// popup.addEventListener('click', () =>{

//     popup.style.display = 'none';
// })

// const formx =document.querySelector('.signup-form');
// // if we just use the ckicl event here then it wil lonly submit the form when there is a click event happen on the cubmit button and not when a person press enter in the text space
// // submit event to the form will react to both(click on the submit button and also when preson press the enter after putting the text)
// // we dont have to do an extra queryselector for the input if we alraedy have the query selelctor for the form, so we can use another methodconst usernaexx =document.querySelector('#usernamex');
// // if we have a form and inside we have an input and that has an id (id=usernamex) (in the html document) the nwe can use the . notation to refer to the id.

// // the above we grab the username id with # infornt
// formx.addEventListener('submit', e =>{
// // default behavioue of browser is that when we press submit button it prefersh the page
// // the below will diable the default action of presesnhing the page
// e.preventDefault();
// // value enter by user will be logged in the console
// //console.log(usernamex.value)
// // we dont have to do an extra queryselector for the input if we alraedy have the query selelctor for the form, so we can use another methodconst usernaexx =document.querySelector('#usernamex');
// // if we have a form and inside we have an input and that has an id (id=usernamex) (in the html document) the nwe can use the . notation to refer to the id.
// console.log(formx.usernamex.value);
// // if we have used the name notation insead of id in the HTML under the form and input it wwould have done the same thing of searching of name( when user done any input) under the form notation
// const usernamexx = formx.usernamex.value;

// console.log(usernamexx);
// if (patternxx.test(usernamexx)){
// // feedback good info
// feedback.textContent = 'that username is valid'; }
// else {
//     feedback.textContent = 'that username must contains letters only between 6 and 12 charactors';

// }

// });

// // regular expression to filter some values and strings
// // what kind of parrent we should match . how many eleletns insdie it. what kind of cheracter e.t.c thjen we write regular epxression to match it
// //regex101.com
//  // regular expression start and end with / .   its case sensitive
//  // strick match , ^ xyz$, it measn there is no chareacter before start of charecter x and there is no charected at the endof charecter z, so it will be like / ^xyz$ /
//  // multiple character match we use [], / ^ [a-z]$ / it will use single match of all character between a-z
//  // match both upper and lower case / ^ [a-z A-Z]$
//   // match both upper and lower case / ^ [a-z A-Z]$
//    // match more than one charater i.e word / ^ [a-z A-Z]{6,10}$ /matches of character having length at least 6 to maximunm10

// // / ^ [a-z A-Z 0-9 ]{6,10}$ / also search numbers as well
// // if we put dot . before the length then it means any character including the special character  / ^ .{6,10}$ /

// // video 61

// // // regex in javascrip

// // const username22 = '@shunp@';
// // // atleast 6 charaacter long
// // const patterns22 = /[a-z]{6,}/;
// // // if we put $(must be at the end) and ^( must be at the start ) that both together means the exact match = /^[a-z]{6,}$/;
// // // test is a method in Javascript on an pattern(here we use regular expression)
// // // let result22 = patterns22.test(username22);
// // // // the above test return the bullion as true or faluse
// // // console.log(result22);

// // // if(result22){

// // //     console.log('rege is passed');
// // // }
// // // else{

// // //     console.log('rege is failed');

// // // }
// // // this tine we use method on string rather then on pattern
// // // pas regex (here is patterns22) to search method
// // // the search will find the first patternn if it cant it will return -1 , if it can then it will gove the position of the first pattern it find can be 0, 1,2,3....
// // // the search will return the integer number
// // let result22 = username22.search(patterns22);

// // console.log(result22);

// // live feedback
// // we can sue key up even and it wil lcall back fucntion everytime// kry up is the fucntion when you let og the key after pressing

// // new event listnert ofr live event listnert
// // get the username bit from the form, here e is the event parameter and her e is use as call back function
// formx.usernamex.addEventListener('keyup', e =>{
//     // when key up triggers
// //here e.target-> gets the target of the event- and gets its value i.e value of <input type="text" id="usernamex" placeholder="username"> from html
// // there e.target.value will be the things that the user will type
// // e.target.value ====== formx.usernamex.value is the same thing
// console.log(e.target.value, formx.usernamex.value);
// // the above will log ewvery time the user input a value liske it type A it will show A and then it type B it will show AB and then it type C then it will show ABC (keyup)
// // we will test the o/p of ((e.target.value)) with the pattern and return tru or falise
// if(patternxx.test(e.target.value)){
//     // we setting the class to the value of sucess to the usermanex
//     formx.usernamex.setAttribute('class', 'success');
//     console.log('passed');
// }
// else{
//     console.log('failed!!!!!!');
//     formx.usernamex.setAttribute('class', 'error');

// }
// // it will log the event i.e log every kep will proporty once pressed
// console.log(e);

// })

//

let array1 = [1, 2, 3, 4];
// to calculate the average after it iterating thorugh last elemnt of array

