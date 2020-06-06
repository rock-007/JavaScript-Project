let x2 = document.querySelector('form')




wetherinfo= async (cityname)=>{
// here cityname will be as promise

console.log(cityname)
const cityname1= await  cityid(cityname);
// console.log(cityname1.Key)
 console.log(cityname1)

// once we get the key from the promise object then we can sue it to retrive the wethercondituion for that city(key)
let citydata= await citywether(cityname1.Key);

citydatanew =citydata
console.log(cityname1)

return {usercityinfo:cityname1, citycondition:citydata }

}



cityid= async (cityname)=>{
    console.log(cityname)
/// to fetch location key/id
    cityidx=await fetch( `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=oELfMkgW0UVGm9F86jg5urga2JTkVwbf&q=${cityname}`)
   
    cityid2= await cityidx.json()
    city3= cityid2[0]
    console.log(city3)
    //  RETURN CITY NAME/KEYCODE
    return city3;
}


citywether = async (citykey)=>{
    console.log(citykey)

    citywether3=await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${citykey}?apikey=oELfMkgW0UVGm9F86jg5urga2JTkVwbf`)

    console.log(citywether3)

citywether1=await citywether3.json()
citywether2= citywether1[0]
console.log(citywether2.WeatherText)
return citywether2;
}


// http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}


















//                                  http://dataservice.accuweather.com/locations/v1/cities/search`?apikey=${key}&q=${city}







// so it will look for all child element of form and once submit is triggered , then it will pass it s an object
x2.addEventListener('submit',e =>
{
    console.log(e)
// HERE NAME is datainput // only name of <input get passed with value in JS 
    let cityname= x2.datainput.value.trim();
    console.log(cityname)
    e.preventDefault();
    x2.reset();
    // then we call the cityid function with the cituyname
   
    wetherinfo(cityname).then(data=>{

        //    let finalcity=data.usercityinfo
        //     let finaldata= data.citycondition
    updateUI(data)
    
    
        });
    // now we need to get the id against the cityname that we got form input-data

}
)