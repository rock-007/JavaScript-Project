//alert("hello");
let age =3;
console.log(age);

let firstname = "Umair";
let secondname = "Ashraf";

let Fullname = firstname + '' +secondname;

console.log(Fullname);
console.log(Fullname[3]);
console.log(Fullname.length);
console.log(firstname.length);
console.log(Fullname.toUpperCase());

let result= Fullname.toLowerCase();
console.log(result,Fullname);

const index = Fullname.indexOf('a');

console.log(index);
let result1 = Fullname.slice(4,5);
console.log (result1);

let result2 = Fullname.substr(4,5);
console.log (result2);   


let result3 = Fullname.replace ('a','b');
console.log (result3);




let radius = 10;
    const pi = 3.14;
    console.log(radius,pi);

    console.log(10/2);
    // remain is %
    let result7 =radius % 3;
    console.log(result7);

    let result8 = pi * radius ** 2;
    console.log(result8);

    let like = 10;

    like =like +1;
    like++;
    console.log(like);
    like--;
    console.log(like);

    let likess = 20;
    likess += 20;
    console.log(likess);

// NaN - not a number
// 
console.log(5/ 'hello');

let result9= 'the blog has' + likess + likess;

console.log(result9);


const title = 'Mr';
const auther ='ali';
const likes = 30;

//1-concatenation way
let result10 = 'the blog is' + title + auther + 'of' + likes;
console.log(result10);



// 2-template string wat (back ticks )

let results11 = `the log is ${title}${auther} of ${likes}`

// 3-creating html templetates

let html = `

<h2> ${title} </h2>
<p>by ${auther} </p>
<span> This blog has ${likes} likes </span>



`;
console.log(html);

let ninjass = ['shaun', 'umair','ali'];

console.log(ninjass);
console.log(ninjass[1]);

let ages1 = [20,25,30,25];
console.log(ages1[2]);

let random = ['shaun', 'uzair', 30];

console.log(random);



let ninjas = ['s','umair', 'ozair'];
console.log(ninjas);
console.log(ninjas[1]);

ninjas[1] = 'ken'
console.log(ninjas[1]);
let ages = [10,20,30];
console.log(ages[2]);
console.log(ninjas.length);

let resutss = ninjas.join(',');
console.log(resutss);

let resutsss = ninjas.indexOf('ozair');
console.log(resutsss);
let resultssss = ninjas.concat(['ken1', 'ken2']);
console.log(resultssss);

let resultsssss = ninjas.push('van');
console.log(ninjas);
let resultssssss = ninjas.pop();
console.log(ninjas);
console.log(resultssssss);


let vage;
// ` ` thhat is used below is the the one just before hte digit on on keyboard
console.log(vage, vage+3, `the vage is ${vage}`);

let vagee=null;
// ` ` thhat is used below is the the one just before hte digit on on keyboard
console.log(vagee, vagee+3, `the vagee is ${vagee}`);

//bollian first is bollian and second is string
console.log(true, false);
console.log("true", "false");

let email1 = 'umair.techo@hotmail.com';
let resultt1 = email1.includes('!');
console.log(resultt1);
let resultt2 = email1.includes('@');
console.log(resultt2);

let name123 = ['umair123', 'ozair123', 'zubair'];
let resultt23 = name123.includes('zubair');
console.log(resultt23);


let age321 = 25;
//check if the age is equal to 25 or 26
console.log(age321 == 25);
console.log(age321 == 26);

console.log(age321 != 25);
console.log(age321 != 26);

console.log(age321 > 25);
console.log(age321 > 26);

console.log(age321 < 25);
console.log(age321 < 26);

console.log(age321 <= 25);
console.log(age321 <= 26);
console.log(age321 >= 25);
console.log(age321 >= 26);




let name453 = 'shaun';

console.log(name453 == 'shaun');
console.log(name453 == 'Shaun');

// lower case letter is greater thasn upper case letter 
console.log(name453 > 'Shaun');
// letter coming first are lower rthen letter coming after 
console.log(name453 > 'crystal');


let agex1 =25;


// loose comparision  string is converted into number before evaluate

console.log (agex1 == 25);
console.log (agex1 == '25');
console.log (agex1 != 25);
// its not string anymore so falsue
console.log (agex1 != '25');


//strictly comparision == instaed of =, atrick value and trype both compared strictly

console.log (agex1 === 25);
console.log (agex1 === '25');
console.log (agex1 !== 25);
// its string here below as we using strick comparision
console.log (agex1 !== '25');


//type conversion 
let score1 = '100';

score = Number(score1);
console.log(score +1);
console.log(typeof score);



// let score12 = NUmber('hello'); it wonmt work as hello is not a number

let score21 = String(50);
console.log(score21, typeof score21);
// 0 is false but +ve and -ve number are true
let score221 = Boolean(50);
console.log(score221, typeof score221);

// string of any length is tru but empty string is faluse
let score2221 = Boolean('0');
console.log(score2221, typeof score2221);

// for loop no ; at the end-- codebloc ={}
// initialization first time only (will tellhow many times we run the loop), condition(if condition try then codebloc run{}),  final expression execute everytime aat the end of code block


for(let i = 0; i < 5; i++) {

console.log('inloop:', i);
}

console.log('finish');

const namess = ['shaun','mari','luigi'];
// one interation is one cycle through i.e cycle of loop till the end
for (let z=0; z < namess.length; z++){
console.log('inloop', z , namess[z]);

//``= back ticks for html template, we use $ to output the variable and the name in {} 
let html = `<div>${namess[z]} </div>`;
console.log(html);

}

let i = 0;
while( i < 9){
console.log('in loop:', i);
i++;
}
//wile loop

let namew = ['umair', 'uzair','owais'];
iw = 0;
while( iw < namew.length){
console.log(namew[iw]);
iw++;
}

//do while, atleast runs once even if the condition is wrong
let namewx = ['umair', 'uzair','owais'];
iwx = 0;

do{
    console.log(namew[iwx]);
    iwx++;
}
while( iwx < namewx.length);


/// CONDITIONAL STATEMET= if stemetmss...


// if stateent-condtional checkone time onyl and not repeted

const agexxx = 20;

if (agexxx > 19) {
console.log('you are over 19 years old');

}


const ninjasxxx = ['umiar', 'uzair', 'daniyal'];

if(ninjasxxx.length > 2){

    console.log("that's a lot of ninjas");
}






















const passwordd1 = 'passxxx';
if(passwordd1.length >=9 ){

    console.log('that  pass is not long enough!');
}

// if-esle , if ione is true do this if not then do the other
const passwords1 = '@pass';

if (passwords1.length >= 8 )
{
console.log('that password is enougfh long');
} else { 
console.log('password is not long enough')

}



const passworddsx1 = '@passffffffff';

if (passworddsx1.length >= 12 )
{
console.log('that password is Mighty long');
} else if (passworddsx1.length >= 8 ) { 
console.log('password is not long enough');

}
else {
console.log('password is not long enough');

}


//logical operatiors or ?/ , and &&


const passworddsx12 = 'ccdpassffffffff';

if (passworddsx12.length >= 12 && passworddsx12.includes('@') )
{
console.log('that password is Mighty long');
} else if (passworddsx1.length >= 8 ) { 
console.log('password is not long @ enough');

}
else {
console.log('password doesnt have @');

}


// logical not (!)- it reverse the bollion if put infront


console.log(!true);

/// if statemt when the user is false .
let user = true;

if (!user){
    console.log('the user is not loggedin now');
}
else {
    console.log('the user is logged in');
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let h = 0; h < scores.length; h++) {

    console.log('your score: ', scores[h]);
    // first = is for normal equal and the additional == are for strick comparison both in content and type but == is only content comparision
if(scores[h] === 100){
    console.log('congrats, you got the top score!');
    // if it comes to this break statent then it will break the top for loop and will carry on from below here
    break;
}
}

for (let j = 0; j < scores.length; j++) {
    

    if (scores[j] === 0) {
// continue will not go dwon if the statemetn is true and will continue the for loop i.e 0 value will not be printed
        continue;
    }

    console.log('your score: ', scores[j]);
    // first = is for normal equal and the additional == are for strick comparison both in content and type but == is only content comparision
if(scores[j] === 100){
    console.log('congrats, you got the top score!');
    // if it comes to this break statent then it will break the top for loop and will carry on from below here
    break;
}
}


// switch statemnts these are strick matches only ===

const grade ='D';

switch(grade){
case 'A':
    console.log('you got an A!');
    break;
case 'B':
    console.log('you got an B!');
    break;
case 'C':
    console.log('you got an C!');
    break;
case 'D':
    console.log('you got an D!');
    break;
case 'E':
    console.log('you got an E!');
    break;
default:
        console.log('not a valid grade');
}


const gradea = 50;

switch(gradea){
case 50 :
    console.log('you got a digit 51');
    break;
case 60 :
    console.log('you got anb 60!');
    break;
case 70 :
    console.log('you got an70!');
    break;
case 80 :
    console.log('you got an 80!');
    break;
case 90 :
    console.log('you got a digit 90');
    break;
default:
        console.log('not a valid grade');
}


// root of document  and can be access anywhere inside code block and outside code block 


// the below is define in global scope
const agee = 34;

if(true){
// we can creat local scope the smae avariaible dinfied in gloval scope
//local scope
    const agee = 50;
 let name = 'umair';
console.log('inside 1dt code block :', agee, name);
// let and const follow block scope but var doesnt follow block scope, so in this var test will also appear in the cosole after the  end block }
// therefore var is avaialbe all the way down to where it is defined
var test ='hello';

}

console.log('outside 1dt code block :', agee, name, test);
//1-first declare the function 2nd call the function
//fuctiohn declaration

function greet(){
console.log('hello there');

}
// norma l function donr have a variable define but expression has variable define (uselful in Hoisting in javscript= expression dont but normal function declaration do)
// hoisting= function declartion is defined after it is call the javascript will bring it up before the top of the fuction call statement.
//fuction expression i.e any variable equal to function is expression and ; at the end of expression and not at the end of normal function defination
const speak = function(){
    console.log('i am good');
};
// call the function or invoke the function

greet();
greet();
greet();
greet();

speak();
speak();


// passing values in the fucntion inside (), define varialbe inside
//${}= template string and start and end with `` the end next to 1
// ${}= is the place holder in template, and inside {expression} have the variable any expression that holds a value or call a function that returns a value
const speakl = function(name){
    console.log(`good day ${name}`);
};
speakl();









