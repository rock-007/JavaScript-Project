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















