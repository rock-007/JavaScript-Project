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

let htmla = `

<h2> ${title} </h2>
<p>by ${auther} </p>
<span> This blog has ${likes} likes </span>



`;
console.log(htmla);

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
let htmlz = `<div>${namess[z]} </div>`;
console.log(htmlz);

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
const speakl = function(name, time){
    console.log(`good ${time} day ${name}`);
};
// this name variable wont work as it will only work in the {} and its only the local varialbe inside the function 
console.log(name);
// the below function speak1 and mario is an argument  and name up related to function is called functions parameters.
// the order of theargument below must match the order of parameters up 
speakl('mario', 'morning');
// we can give parameters the default values
const speakl2 = function(name = 'ligiun', time = 'night'){
    console.log(`good ${time} day ${name}`);
};
// if we pass the argument when the paramtereds have default cvalsue sthen the argument will override the default parmaneters values
speakl2();

 


const calcArea = function(radius){
// we dont need to define the variable area1 and we can just do like retun  3.14 * radius**2; and it will work the same
    let area1 = 3.14 * radius**2;

//console.log(area); this will have local importance and outside the function its not saved to make it visiblae outside we do the return command 

return area1;


};

// when this founction calcArea(5) is called it will call thefunction with variable radius =5 and then that function calcArea() will return the area1 values and then we defindthe areax = area1 (return value)
const areax = calcArea(5);
console.log(areax);


const calcVol = function(areax){

    console.log(` the volune is twice the${2+areax}`);
};
calcVol(areax);

// clearner and short way to write, we dont use function keywork  => and code body

const calcArea1 = (radius ) => {

return 3.14 * radius **2;

}
//here areax from abouve will become the radius cvalye
const areay = calcArea(areax);
console.log('area is :', areay);

//when qew havew only one parameter then we can take the parantesis of (), but if 2 or more or if empty then we need ()
//as the body has only one line code that is returned, then we can define on the same line and dont write return as its default and not () either
const calcAreaxy = radius =>  3.14*radius**2;


const areaz = calcArea(areay);
console.log('area is :', areaz);

const greet1 = function(){
    return 'hello, world';
};
const restl1x1 = greet1();
console.log(`${restl1x1}`);


// arrow function version, if no parameters then we need to pu empty () and then =>{} atleast. and as its single line return then we even dont need to write {} and retun 
const greet123 = () => 'hello, worldx';
const results123 = greet123();
console.log(results123);


const bill = function (products, tax){
let total = 0;
for(let i=0; i < products.length; i++){
    // x = x+1 is smae as x += 1 unitill the loop finishes it will add up all and then return
    total += products[i] + products[i] * tax;
}
return total;

}
console.log(bill([10,15,30],0.2))


const bill1 = (products, tax)=>{
    let total = 0;
    for(let i=0; i < products.length; i++){
        // x = x+1 is smae as x += 1 unitill the loop finishes it will add up all and then return
        total += products[i] + products[i] * tax;
    }
    return total;
    
    }
    console.log(bill([10,15,30],0.2))
    
// function is invoked through functionmane and (), like xyz(),,,,, but methond is invoked therough dot . notation
// VALUE.METHOD()  this is how the metod is invoked
const name123x ='shaun';
let resulttwo = name123x.toUpperCase();
console.log(resulttwo);


// FUNCTION= is defined on its own
//methods = defined on data type or an onject
// methods are function but just differ that how we call them and where we define
// 7 datatype in javascript

// function as an argument = callback function


const myFunc = (callbackFuncq) => { 
let value = 50; 

callbackFuncq(value);

};

myFunc(function(value){
console.log(value);

});


const myFunct = (callbackFuncqx) => { 
    let value = 50; 
    
    callbackFuncqx(value);
    
    };
    // only one parameter (value) so no need the brackets ()
    myFunct(value=> {
    console.log(value);
    
    });


let people = ['mario', 'umair', 'ryr'];
// this will run three times as three items in arrays 
people.forEach(function(){
    console.log('something');
})

//when we invoke myfunc(), we have to pass some kind of parameter xxxx


////////////////////////////////////////////////////////////////////

// normal fuinction is with argument and it when invoke pass the argument ot the function
// but in callback function, when invoked, it will first go to normal function and then return bakc the value for invoke function (step-1) and then step-1 will be execuited the inside function

// callback function

// step-1 we invoke the callback function, which dont have an argumnet but instead another function
// step-2 after step-1 we will process this fucntion and return the value as an argument to the step-1 function



// the below is step-2
const myFuncxx =( callbackFunc) => {

    let value =50;
    callbackFunc(value);
};
//the below is step-1
myFuncxx(function(value){
console.log(value);


})
const myFuncxxy =( callbackFunc) => {

    let value =50;
    callbackFunc(value);
};
//the below is step-1
myFuncxxy(value =>{
console.log(value);


})



let people1 =['umair', 'uzair', 'zubair'];
// beow forEach is builtin arrys method
//below is callback fuinction, it will output three times
// inside this callback function each element is equal to abc and will print out three times .foreach makes it for each item from array
people1.forEach(function(abc){
console.log(abc)

});

let people12 =['umair', 'uzair', 'zubair'];
// beow forEach is builtin arrys method
//below is callback fuinction, it will output three times
// inside this callback function each element is equal to abc and will print out three times .foreach makes it for each item from array
people12.forEach(abc =>{
console.log(abc)

});


let people123 =['umair', 'uzair', 'zubair'];
// beow forEach is builtin arrys method
//below is callback fuinction, it will output three times
// inside this callback function each element is equal to abc and will print out three times .foreach makes it for each item from array
// 2nd will be index, i,e efg=index
// so is like this, .foreach (person, index)
people123.forEach((abc, efg) =>{
console.log(abc, efg)

});



let people1234 =['umairx', 'uzairx', 'zubairx'];

const logPerson = (person, index) =>{
    console.log(`${index} - hello ${person}`)
};

//below logPerson is a call back function i.e passing to another function or another method as an ARGUMENT
people1234.forEach(logPerson);

////////////////////////////////////
// the bvelow gets the .people class



const ul = document.querySelector('.peoplesz');

const peoplesz=['umairc', 'uzaircc', 'zubairccc'];

let html = ``
peoplesz.forEach(function(person){
html +=`<li style="color: purple">${person}</li`;
}); 

console.log(html);

ul.innerHTML = html;




///  OBJECTS
//onjects= they have properties and threy can do something
//object= propoerties+ use(action)
//objects = properties(tile+comntnet+auther...) + method(login+logout+publish+delte....)
// bultinobject, day objet, mathobject


//object literail notation

let userxxc ={
// key and value  key: value
    name: 'crystal',
    age: 30,
    email: 'umair.ashraf@hotmail.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules','10 things to make with marmite']


};

console.log(userxxc);
// just one value
console.log(userxxc.name);
// to replace or update
console.log(userxxc['age']);
userxxc.age =35;
console.log(userxxc.age);




// another way to grap replaced or updated property [name of the key]
console.log(userxxc['age']);
console.log(userxxc['blogs']);
userxxc['age']=33;
console.log(userxxc.age);

// location object is equal to variable and is fine
const  key ='location';
console.log(user[key]);
//user.key cant use it as it will look for key object which doest exist
// otypeof = operator here (object type here)
console.log(typeof userxxc);
//const blogs = [
    //{tile: '@why mac and cheese ruiles', likes: 30  }  is an object
    //{title: '@10 things to make with MediaStreamTrackAudioSourceNode', likes:50} is an objecy

    // below is array of objects 
//{tile: '@why mac and cheese ruiles', likes: 30  }, {title: '@10 things to make with MediaStreamTrackAudioSourceNode', likes:50}

//];

let userxxc1 ={
    // key and value  key: value
        name: 'crystal',
        age: 320,
        email: 'umair.acxvshraf@hotmail.co.uk',
        location: 'berlxcvin',
        //blogs: ['why xcvvmac and cheese rules','10 things to make with marmite'],
        blogs: [
        {tile: '@why mac and cheese ruiles', likes: 30  }, {title: '@10 things to make with MediaStreamTrackAudioSourceNode', likes:50} ],
    // login is key and function is value here
        login:  function(){
console.log('thi user logged in');
       

//console.log(blogs);   
},
//casue not to use arrow function here, as that will chage the propert of this. keyword, if we use this. keywork in an arrow function then this. will not equal to the local object and rather this will be the value at the time wheh the method was befine with the user i.e (user.logblogs(); and at that the this. was a global windows object )
// we can also use like this logBlog(){ --- these are still regular functions and not arorw functions       
logBlog(){
        //context object=this,   if it is inside the document this it will refer to global object 
       // this 
       //console.log(this);  // this is here as whole user object so will outpu all the user info
           //console.log(blogs);
       //
       console.log('this user has written the following blogs:');
       //here this.blogs is directing to arrays of tw values, .forEach is the method we use  and inside we use callback function and here blog as paramenter 
       //{ console.log(blog)});
       this.blogs.forEach(blog =>{ console.log(blog.title, blog.likes);
        });
}
};
// call this method by using the below to display this user logged in
// menthod is define inside the object or related to some variable but function is not depended on anything
//userxxc1.login();
// java set the method(logBlog()) to the value from the method its used on, in this case is the user xxc1, so here it will be equal to the this on line  logBlog: function(){console.log(this);
//userxxc1.logBlog();
 //Globa//l object in java is windows
//console.log(this);
// object inside arrays [{objects having elenets    },{2ns objects having elements 
userxxc1.logBlog();
console.log('userxxc1:', userxxc1)

// Math is an object in javascript

console.log(Math);
console.log(Math.PI);


const area = 7.7;
//math object  and in that object we have method round with parameter as area
console.log(Math.round(area)); 
// lower from the point value
console.log(Math.floor(area)); 
// up valur to point
console.log(Math.ceil(area)); 

//leave the decimal out
console.log(Math.trunc(area)); 
// randon between 0 and 1
const random1 = Math.random();

console.log(random1);
// randon no b/w 1 and 100
console.log(Math.round(random1 * 100));

// premative and refernce type (how they are stored and used in Memoney)
// premetive: number string and bollon,null undefined symoble
//reference type: object types arrays functions dates other objects 
//  
// Primitive (when creat new value and assign to variable it  will store in memory in stack 
//stack access is quick but limited space

//reference type store in heap
//heap is slow but have alot space  

// STACK= any value(string,bollian...) is assigned the variable and if the array that will be stored in PRIMITIVE need to access the string has to refer to the varialbeto get the info, variablew can have pointer that referes to the heap stuff

const userOne ={name: 'umair', age:34 };
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.age =40;

// it will also affect the userTwo eventhorugh we havnet update to any new value, but beucase we created userTwo as copy of userOne so it created onyl new varialbe userTwo and poiting to the object {name: 'umair', age:34 } and having the same pointer value (pointit to heap object) as the one with userOne
console.log(userOne, userTwo);