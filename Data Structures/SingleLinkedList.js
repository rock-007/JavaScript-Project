// ////////////////////////////////////////


// //Singly Linked List


// class singleLingList {
//     constructor (val){
// this.head=null;
// this.next =null;

// }


// }

class Node{
    constructor(val){
        this.val = val;
        this.next = null;


    }

}

class SinglyLinkedList{
    constructor(){
        // link list has pointer to the head of the list ointer to the tail of the list and the length
        // first we will assign null and when the Push is initaialted then this null will be repalce by the value of the push 2nd push will make the valraible as tail and it will make the first varialbe as head
        this.head =null;
        this.tail = null;
        this.length= 0;
    }
    // the fucntion will accept a value and as List1 as already made the skeleton and will use the key defined in the constructor as head and tail and fillin the node values
    push(val){
// the node object here is not a new contructed but it alraedy part of the signlylikedlist
        var newNode = new Node(val)
        // the below will work for the first push onyl as then there will be no head avaialbe
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;

        }
        else {
            // next element is the 2nd push and 3rd pus hand so on
            this.tail.next =newNode;
            // move the tail marker to the last node
            this.tail =newNode;
        }
        this.length++;
        return this;
    }
    // transverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;

    //     }
//     pop(){
//         if(!this.head)
//             return undefined;
//             var current = this.head;
//             var newTail =current;
//             while(current.next){
//                 newTail =current;
//                 current =current.next;

//             }
//         this.tail = newTail;
//          this.tail.next =null;     
//          this.length--;   
//             if(this.length === 0){
//  this.head = null;
//  this.tail = null;

//             }
//             return current;
//         }
//delete the first head
            // shift() {
            //     var currenth = this.head;
            //     this.head = currenth.next;
            //     this.length--;
            //  //   console.log(currenth);
            //    return currenth;
            // }
            
            // unshift add at the start
            unshift(abc) {
                var newNode =new Node(abc);
                if(!this.head){
                    this.head =newNode;
                    this.tail =this.head;
                } else{
                newNode.next = this.head;
                this.head=newNode;
                this.head = abc;
              //  this.next = currenth;
                this.length++;
                }
            }

    get(index) {
        if(index <0 || index >= this.length) return null;
        var counter =0;
        var current =this.head;
        while(counter !==index){

            current= current.next;
            counter++;

        }
         return current;
// set is a methodf that wexxcept two thing index and value to index(index+value), we can use get inconjution with this like if node is found true then update

    

        }
        set(index, val){
            // it will return true or faluise
            var foundNode = this.get(index);
            if(foundNode){
                foundNode.val = val;
                return true;}
                return false;


            }

// insert is similar to set but it insert the new Node rather to update an existing one in case of set
            insert(index, val){

                // 4 items (1,7,3,9) index will be 0-3 and legth is 4, and we can add at 4th location i.e with push but if 5th postion thats wrong
                if(index<0 || index > this.length) return false;
                // add in the end
                if(index ===this.length) return this.push(val);
                // add in the start
                if(index === 0) return this.unshift(val);
                var NewNode = new Node(val);
                // get the value of the previous postion with respect the the oition hwere we need to insert the item
                var prev = this.get (index-1);
                var temp = prev.next;
                prev.next = newNode;
                newNode.next = temp;
                this.length++;
                return true;


            }
            remote(){
                if(index <0 || index >=this.length) return null;
                if (index === 0) return.shift();
                if(index === this.length -1) return this.pop();
                // retrive the value of the one befroe node that we trying to remore
                //prebiousNode will store node
                var prebiousNode = this.get(index-1);
                // temporary save the next item value 
                var removwd = prebiousNode.next;
                prebiousNode.next = removwd.next;
                this.length--;
                return removwd;



            }


        
        }

    









    



// this new will creat an object from the class node
// var first = new Node("hi");
// // then access the next from the class and making a whole new node
// first.next = new Node("there");

// first.next.next = new Node("how");

// first.next.next.next = new Node("are");


// console.log(first)


let list = new SinglyLinkedList()
// this push will keep track of it and we dont need to do next.next.next
list.push("f1")
list.push("f2")
//console.log(list);

// list.pop();
// console.log(list);

// list.pop();
// console.log(list);
// list.shift();
// console.log(list.shift());
//list.unshift("afc");
console.log(list);

//list.get(1);

list.set(1,"!!!")
console.log(list.set(1,"!!!"))
console.log(list)
list.set(-1,"!!!")

console.log(list.set(-1,"!!!"))

list.insert(0,"it");
console.log(list)
