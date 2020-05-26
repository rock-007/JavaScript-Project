// // let h=  hash("pink")

// // console.log(h);

// let total =0;

// total += "hello".charCodeAt(0)

// total += "hello".charCodeAt(1)

// total += "hello".charCodeAt(2)

// total += "hello".charCodeAt(3)

// total += "hello".charCodeAt(4)

// console.log(total)

// let x =total % 11
 
// console.log(x)

// function hash(key, arrayLength){

// let total=0;

// for (let char of key){


//     let value = char.charCodeAt(0) 
//     // % result will always b/w 0 and 10? or between 0 and the modulus elelent ?
//     total =(total + value) % arrayLength;
// }
// return total;

// }

// console.log(hash("hellooofsdfsdfsdfsfsdfsfsdfsfsfsfsdooooooooooooooooofdgdfgdfgdfgdfgdfgdfgdfoooerwerewoooooodsfsdfsdfdsfdsfdsfds", 15))



function hash(key, arrayLength){

    let total=0;
    let WEIRD_PRIME= 31
    
    for (let i=0; i<Math.min(key.length, 100); i++){
        // for each character
        let char = key[i];
        let value =char.charCodeAt(0)
        total =(total * WEIRD_PRIME +value) % arrayLength;
    
    
    }
    return total;
    
    }
    
    console.log(hash("hellooofsdfsdfsdfsfsdfsfsdfsfsfsfsdooooooooooooooooofdgdfgdfgdfgdfgdfgdfgdfoooerwerewoooooodsfsdfsdfdsfdsfdsfds", 15))
    
    class HashTable{
        // the beow set the size maximum to 53 unless we get input of any other number less than 53
        constructor(size=37) {
            this.keyMap = new Array(size)

    }
        _hash(key){
            let total=0;
            let WEIRD_PRIME =31;
            for(let i=0; i< Math.min(key.length, 100); i++){
                // define each charter so we loop to each of it  and calculate the total
                let char =key[i];
                let value = char.charCodeAt(0)
                total =(total*WEIRD_PRIME +value) % this.keyMap.length;


            }
            return total;

        }
        set(key,value){
            let index= this._hash(key);
                       // return index;

            // now we know the index whre will be insert the key and the value
            if(!this.keyMap[index]){
                // we need to do this as have to make nested array [,,,[],,,,] i.e array within an array as we are using separate chaining method here.
                this.keyMap[index]=[]
            }
            this.keyMap[index].push([key,value])
        }
        get(key){
            let index = this._hash(key);
            if(this.keyMap[index]){
                
             //   return this.keyMap[index]; this will give the whole value at the index but we need the sub exact value
                for (let i=0; i< this.keyMap[index].length; i++){
                    if(this.keyMap[index][i][0]=== key){
                        // [0] here b/c we are saving the key first and then the item
                        //this iwll give you only the value return this.keyMap[index][i][1] or you cal reutnr an error of key value
                        return this.keyMap[index][i]
                    }

                }


            }
            return undefined;

        }
        keys(){
            let keysArr =[];
            for (let i=0; i< this.keyMap.length; i++)
            if(this.keyMap[i]){
                for (let j=0; j<this.keyMap[i].length; j++){
                    // if(!valuesArr.includes(this.keyMap[i][j][1])) we dont need this as we expect the key should be the same , but it is possible
                   
                    keysArr.push(this.keyMap[i][j][0])}
            }
            return keysArr;
        }
        // it will take all the values from the array
        values(){
            let valuesArr =[];
            for (let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j=0; j<this.keyMap[i].length; j++){
                    // if(!valuesArr.includes(this.keyMap[i][j][1])) not true i.e we found a duplicate value then it will not push in the arra... and will go for next for loop with j value
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
             valuesArr.push(this.keyMap[i][j][1])}}
            }}
            return valuesArr;
        } 
    }
    
    // this will create an empty array that will be used to used to store the has variable later
    let ht = new HashTable();
    
console.log(ht.set("hello1 position", "i am all fine" ))
console.log(ht.set("hello2 position", "i am all fine" ))
console.log(ht.set("hello3 position", "i am all fine" ))
console.log(ht.set("hello4 position", "i am all fine" ))
console.log(ht.set("hello5 position", "i am all 3fine" ))

console.log(ht)

// now we can use the get function and using the key value to find the hash and then go to find the value for that key in the array


console.log(ht.get("helloc position" ))


//console.log(ht)



console.log(ht.values())

console.log(ht.keys())


ht.keys().forEach(function(key){

console.log(key);

})
