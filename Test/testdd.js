function timeConversion(s) {
    /*
     * Write your code here.
     */

s=s.split(":")

let y;

if( s[2].replace(/[^A-Z]/g, '') == "AM" ){

    if(s[0]< 12){  
    
    s[2]=parseInt(s[2],10)
if(s[2]< 10 ){
    s[2]= "0"+s[2]
}
if(s[2] == NaN){s[2]= "00"}
    }
    else{
        s[0]= "00"
 s[2]=parseInt(s[2],10)
if(s[2]< 10 ){
    s[2]= "0"+s[2]
}
if(s[2] == NaN){s[2]= "00"}
    }
  }
else  { 
////////////////////


if(s[0] <12 && s[2].replace(/[^A-Z]/g, '') == "PM")


{ 

    s[2]=parseInt(s[2],10)
    y=  s[0]
    y = parseInt(y,10)+12
    s[0] =y

    if(s[2]< 10){    s[2]= "0"+ s[2]  }
    
    if(s[2] == NaN)    {s[2]= "00"}
    

    
    
    if(s[0]<10){ s[0].padStart(2,'0')}

}
else{ 

    s[2]=parseInt(s[2],10)
    
    y = parseInt(y,10)
    

    if(s[2]< 10){    s[2]= "0"+ s[2]  }
    
    if(s[2] == NaN)    {s[2]= "00"}
    

    
    
   


}











////////////////
}

s=s.join(":")

return s

}


const s="06:40:03AM"
let z=timeConversion(s)

console.log(z)