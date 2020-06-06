// this will interzasact with the API and then display

// the bwlow key is the API key form accuwether, fre acount has 50 request per day, we will make two diffrent request to two end points one to get the city code and other to rquest the wether for the city
const key = '8aZI4psZO7TTBsN4WuFV9mUFyGbjHsAN';

// make the fucntojun that will do the city code request 
// we make async as we want it to return the promise
const getCity = async (city) =>{
// this is ithe base url to the 1st end p[oint were we make the request]
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
// whereever you see ? at the end of the URL its showing a qurty parameter 
    const query = `?apikey=${key}&q=${city}`;
    // the above url will like  http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}
// fetcdh will return a promise
    const response = await fetch(base +query);
    // in jason gformat
    const data = await response.json();
    // as the data return will be all the matches for the citiy mnachester wewill pick up the first one by [0]
//console.log(data[0]);
// the below will return a promise and it will be reutnrd 
console.log(data);
return data[0];


}


//get wether info

const getWether =async (id) =>{


    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    //?= indicates the query parameters
    const query = `${id}?apikey=${key}`;
    console.log(query)
    const response = await fetch(base+query);
    const data =await response.json();

    // here the dats is JSON array of object, ususally [0] we need and that all it has sometimes
    console.log(data)
    console.log(data[0],data[1]);
    // we data the array =data, although it has only one onject isnide will we will rather take out the pure object as [0], so returning will be object and not array
    return data[0];
}

// as we got the promise fro mthe above then
// data is something and err is error
// getCity('manchester').then(data =>
    
//     {return getWether(data.Key);

//     }).then(data => {
//       //  console.log(data);
//     })
    
// .catch(err => console.log(err));


//getWether("329260");