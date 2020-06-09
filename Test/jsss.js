function gradingStudents(grades) {

    let newGrage= grades
        // Write your code here
    if (grades < 38)  newGrage;
    
     
    else if (grades%5 !==  0 && (grades+1)%5 ==0){
    
     newGrage=newGrage+1 ;
    
    }
    else if (grades%5 !==  0 && (grades+2)%5 ==0){
    
        newGrage=newGrage+2 ;
       
       }
    
    
    return newGrage
    
    
    }

let z =gradingStudents(73)


console.log(z)

