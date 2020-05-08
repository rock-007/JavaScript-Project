// we will use Bootstrap libary as it will help us focusing on Javascript rather then wiroing on CSS
// bootstrp is CSS + JS library for good looking website easy



// video 65

// first create array that store correct answers 
// stored as value that each input field has like  two values  A and B 
// here we have 4 question then it will be 4 valuse 
// array will staore the correct value for each question [ value, value...]
const correctAnswers = ['B','B','B'];
// whe user submitted the form we need that reference and that we will get form the form , grab that form class is .quiz-form

const form = document.querySelector('.quiz-form');
// then listen for submit event on the form 

form.addEventListener('submit', e=>{
e.preventDefault();
// by default we start with zero
let score =0;
//q1 is name field from html and it will get the value from it A or B (when clicked), q1,q2,q3 for each question get vlaue whwn clicked
const userAnswer = [form.q1.value, form.q2.value, form.q3.value];

//check answers and cycle thorugh them for each method
// answerx is a imaginary variable that is the result of=form.q1.value form above and sanme for others.
// indes is the postion in the  array i.e x,0(index of form.q1.value) y,1 z,2
userAnswer.forEach((answerx, index) =>
{
    //here index will corelate the 1 postion in userAnswer to 1 postion to correctAnswers
if(answerx === correctAnswers[index]){

    score += 33.3333;
}


});

console.log(score);

});

// start from vidfeo 68