

let x1 = document.getElementById('apicallx')


async function  abc(){
  //  const key='0b05c3bed050ac4af5b617adea26a6a4'
  const key='AA5Z2tcCCaA37aY78L6pBvGB9dWVKyI8'

//let apicallf= 'http://api.weatherstack.com/current?access_key='
let apicallf='http://dataservice.accuweather.com/currentconditions/v1/'
let apicalls= `?apikey=${key}&q=london`
// let apicalll= '&query=New%20York'
console.log(apicalls)

let apicall = await fetch(apicallf +apicalls )
console.log(apicall)
    let apidata= await apicall.json()
    console.log(apidata)
  //  console.log(apidata.key)
console.log(apidata.current.weather_icons[0])
return apidata.current.weather_descriptions[0];
    }
    abc()
    .then(z1 => {
      x1.innerHTML=`<p>Weather: ${z1} </p>`
    });

    //http://api.weatherstack.com/current?access_key=0b05c3bed050ac4af5b617adea26a6a4query=New%20York"
    //http://api.weatherstack.com/current?access_key=0b05c3bed050ac4af5b617adea26a6a4&query=New%20York