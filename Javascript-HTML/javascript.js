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
