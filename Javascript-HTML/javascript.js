alert("hello");
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

let ninjas = ['shaun', 'umair','ali'];

console.log(ninjas);
console.log(ninjas[1]);

let ages1 = [20,25,30,25];
console.log(ages1[2]);

let random = ['shaun', 'uzair', 30];

console.log(random);








