

let x1 = document.getElementById('apicallx')


// async function  abc(){
//   ///  const key='0b05c3bed050ac4af5b617adea26a6a4'
//   const key='xx8aZI4psZO7TTBsN4WuFV9mUFyGbjHsAN'
//   const id='328328'

// //let apicallf= 'http://api.weatherstack.com/current?access_key='
// let apicallf='http://xxxdataservice.accuweather.com/currentconditions/v1/'
// let apicalls= `${id}?apikey=${key}`
// // let apicalll= '&query=New%20York'
// console.log(apicalls)

// let apicall = await fetch(apicallf+apicalls)
// console.log(apicall)
//     let apidata= await apicall.json()
//     console.log(apidata[0])
//   //  console.log(apidata[0])

//   // so up apidata is an JSON array(having objects), so we take the first object that has all the info and later we use WeatherText property to extract info
// return apidata[0];
//     }
//     let v1=abc()
//     .then(z1 => {
//       x1.innerHTML=`<p>Weather: ${z1.WeatherText} </p>`
//     });
//     console.log(console.log(typeof(abc())))

    //http://api.weatherstack.com/current?access_key=0b05c3bed050ac4af5b617adea26a6a4query=New%20York"
    //http://api.weatherstack.com/current?access_key=0b05c3bed050ac4af5b617adea26a6a4&query=New%20York
    //http://api.weatherstack.com/current?access_key=0b05c3bed050ac4af5b617adea26a6a4&query=New%20York

    //328328?apikey=8aZI4psZO7TTBsN4WuFV9mUFyGbjHsAN
    //328328?apikey=8aZI4psZO7TTBsN4WuFV9mUFyGbjHsAN



     updateUI=(data)=> {

      let finalcity=data.usercityinfo
          let finaldata= data.citycondition
      console.log(finalcity)
      console.log(finaldata)

      x1.innerHTML=`${finalcity.LocalizedName}`




    }