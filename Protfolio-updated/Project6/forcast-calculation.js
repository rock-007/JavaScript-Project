let x2 = document.querySelector('form')


// so it will look for all child element of form and once submit is triggered , then it will pass it s an object
x2.addEventListener('submit',e =>
{
    console.log(e)
// HERE NAME is datainput // only name of <input get passed with value in JS 
    let cityname= x2.datainput.value.trim();
    console.log(cityname)
    e.preventDefault();
    x2.reset();

}
)

console.log("cityname")










