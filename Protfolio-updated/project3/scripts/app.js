// DOM minipulation here that means where you interact the main screen
// we can just use the form from the html or use the userdefined class for that form that we created earlier

const cityForm = document.querySelector('form');
//.card element refere to div in html
const card = document.querySelector('.card');
//. detail element refer to another div in html
const details = document.querySelector('.details');
// image with class of time
const time = document.querySelector('img.time');
// dic with class of icon and image isdie that 
const icon = document.querySelector('.icon img');


const updateUI =(data) => {
    console.log(data);
//cityDets is a variable that has property from the object
const cityDets = data.cityDets;
const weather1 =data.weather;
 console.log(cityDets);
//const {cityDets, weather1} = data;

//destructure properties from data object get the property for onbject cityDets and weather1
//const {cityDets, weather1} = data;


// update deatils template

details.innerHTML=  ` <h5 class="my-3">${cityDets.EnglishName}</h5>
<div class="my-3">${weather1.WeatherText}</div>

<div class="display-4 my-4">
    <span>${weather1.Temperature.Metric.Value}</span>

    <span>&deg;C</span>

</div>`;
const iconSrc = `img/icons/${weather1.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);
// update noight day and icon image
// propert is true isDaytime 
//let  timeSrc = null;
let timeSrc = weather1.IsDayTime ? 'img/day.svg' : 'img/night.svg';
// if(weather1.IsDayTime){
//     // source of day image if save locally
// timeSrc ='img/day.svg';
// } else{
//     timeSrc ='img/night.svg';
// }


time.setAttribute('src',timeSrc);
}




//remoe the d-none class onece the user enter some city adn will now shoeing dispklay 
if(card.classList.contains('d-none')){
card.classList.remove('d-none');

}




;
//submit is the event when sure types in and press the enter
const updateCity = async(city) =>{

const cityDets = await getCity(city);
const weather1 = await getWether(cityDets.Key);
// return object with two properties
return{

cityDets: cityDets, weather: weather1

};

}
cityForm.addEventListener('submit',e =>{

    e.preventDefault();
    //citiy is the name(for refrence to the input) in the input section under the form and get value of that
const city =cityForm.city.value.trim();
// it will clear up the form fiel
cityForm.reset();

//update UI for with new city
updateCity(city).then(data => updateUI(data)).catch(err => console.log(err))
})