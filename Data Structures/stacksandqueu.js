// var stack =[]

// stack.push("google.com")
// stack.push("Instagram")
// stack.push("youtube");

// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// // 2nd methond using builtin array method // but remeber this approach is not good as we have to reindex from the start poition so BIG O notation and push and popo is better option as only the new index is the end is removed or added

// var stack1=[]
// stack1.unshift("i am the first")

// stack1.unshift("i am the 2nd")

// stack1.unshift("i am the last")


// console.log(stack1);
// // so we have to pop the last time in this casei is the first item i n the array s ow e cant use the popo inseted we use shift method 

// stack1.shift()
// console.log(stack1);

// stack1.shift()
// console.log(stack1);




class Node{
constructor(value){
    this.value =value;
    this.next = null;


}

}





class Stack{

    constructor() {
        this.first =null;
        this.last =null;
        this.size =0;


    }

    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first =newNode;
            this.last= newNode;

        } else {
            var temp =this.first;
            this.first = newNode;
            this.first.next =temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        // we are defininf this.first outsode the upper brack b/c this.firast will work anyway if thethis.first === this.last is true and if its not true then thne first will also execute 
        this.first = this.first.next;
        this.size--;
        // .value is a method that is inside the temp varialbe anything
        return temp.value;
    }


}

var stack = new Stack()
console.log(stack.push(2301));

console.log(stack.push(2331));
console.log(stack.push(3331));
console.log(stack);






