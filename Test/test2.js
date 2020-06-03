function staircase(f) {

 let n=f

    for (let i=0; i<n; i++){
    var row="";
    
        for (let j=0; j<n; j++){
    
    if(i+j > 5){
        row += "#";
    }
    
    else{
     row += " ";}
    
        }
    console.log(row);

        
    }
    
    
    
    

    
    
    
    
    
    
    
    }

let d=6
    staircase(d)