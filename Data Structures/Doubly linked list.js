// Node (value, next, previous)


class Node{
    constructor(val){
        this.val =val;
        this.next = null;
        this.prev =null;
    }


}

//DoubleLIked List(head, tail,length), its not taking any value but will use it as formula when adding deleting ndoes and seeting refernce values to each node

class DoubleLIkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.length =0;

    }
// push add to the last item
push(val){
    var newNode = new Node(val);
    if(this.length ===0){
        this.head = newNode;
        this.tail = newNode;
    } else{

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail =newNode;

    }
    this.length ++;
}
// pop delete the last item, so it know the last item so we dont have to gove any value
    pop(){

        if (!this.head) return  undefined;
        var poppledNode = this.tail;
        if (this.length === 1){
        this.head = null;
        this.tail = null;
        }else{     
            this.tail = poppledNode.prev;
            this.tail.next = null;
            poppledNode.prev = null;

        }
        this.length --;
        console.log(poppledNode);
        return poppledNode;
       
    }
// sift is to remove from the start
    shift(){
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
        var shiftedNode = this.head;
       
        this.head =shiftedNode.next;
        shiftedNode.next.prev = null;
        shiftedNode.next =null;
        }
       this.length --;
        return this;


    }

// unsift is to add to  the start, we have to give val here as we adding new item
    unshift(val){
        var newNode =new Node(val);
        if(this.length ===0 ){
            this.head = newNode;
            this.tail =newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length ++;
        return this;



        }
        // get the value/ node at specific index

    get(index){

        // this.length will always be one less then the last index
        if(index <0 || index >= this.length) return null;
        if(index <= this.length/2){
    var count =0;
    var current =this.head;
        while(count != index){
            current = current.next;
            count++;

        }
        console.log("working from start")
// if i dont return then the optputo from this function cant be used outsoide
        return current;





    }

    else{
        var count = this.length -1;
        var current = this.tail;
        while(count != index){
            current =current.prev;
            count --;

        }
        

    } 
    console.log("working from end")

        return current;
    }
    set(index, val){

     var fouundNode =   this.get(index);
        if(fouundNode != null){
            //.val is the function to update the input elelemt, it says the the updated value of foundNode is equal to val
            fouundNode.val =val;

            // we are returning tryu or false jist to show thats is been done or not successfuololy
            return true;
        }
        return false;

    }
        insert(index,val){
            //so if three items index will be 0,1,2 and length is 3 and we can add at the end of the item i.e at index=this.length 
            if(index <0 || index> this.length) return false;
            if (index ===0) return this.unshift(val);
            if(index === this.length) return this.push(val);
            // store the new node in a variable so we can insert ot
            var newNode = new Node(val);
            // we need athe node before the positon we need to insert then we can work on it
            // grab beofre node and save in constant
            var beforednode = this.get(index-1);
           // grab after node and save in constant

            var afternode = beforednode.next;
            beforednode.next =newNode;
            afternode.prev = newNode;
            newNode.prev =beforednode;
            newNode.next =afternode;
            this.length++;
            return true;
        }
        remove(index){
            if(index <0 || index>= this.length) return false;
            if(index === 0) return this.shift();
            if(index === this.length-1) return this.pop();
            // use the get method to retrive the item to be removed
// we first save to the variable
// note here with this.get we are givng parameter index(b/c we dont know whats the position ) but as above in shift and pop we dont give any paramaet(b/c shift knows its 1st item and opp knows its last item)
            var removedNode = this.get(index); 
            var beforenode = removedNode.prev;
            var afternode = removedNode.next;
            beforenode.next =afternode;
            afternode.prev =beforenode;
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
            return removedNode;

        }
    



    }


// // first is 12
// first =new Node(12);
// console.log(first);
// // second is 13
// first.next = new Node(13)
// console.log(first.next);
// // linking 13 back to 12
// first.next.previous= first;
// console.log(first);

list =new DoubleLIkedList()

  list.push(99)
// console.log(list);
list.push(101);
list.push(102);
list.push(103);
list.push(104);
list.push(105);

list.push(106);
// console.log(list);
 list.push("last item");
// console.log(list);
//list.pop();
//console.log(list);
list.shift();
//console.log(list);
// list.shift(); 
// console.log(list);
//list.unshift("newhaed");
//list.get(1);
console.log(list.get(3));

console.log(list.set(0,"Harry"));
console.log(list);

// the below will return true is inertion happened
console.log(list.insert(2,"i am New"));


console.log(list.remove(4));