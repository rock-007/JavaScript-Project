// // when use arru we will then use push and shift // push=adding to last doesnt require reindexing but shift= requires reindexing as added int the start
// var q=[];

// q.push("first");
// console.log(q);

// q.push("second");
// console.log(q);

// q.push("last");
// console.log(q);


// console.log(q);

// q.shift();
// console.log(q);

// q.shift();
// console.log(q);

// q.shift();
// console.log(q);

// // or we can do the all above with unshift and pop

// q.unshift("FIRST")
// q.unshift("SECOND")
// q.unshift("LAST")

// q.pop()
// q.pop()
// q.pop()

// singly linked list add to the end and remove to the start(as removing from the end will trasverse through all node and biog o issue)

// node function accept  a value and creat a node 
class Node{
    constructor(value) {

        this.value =value;
        this.next = null;

    }


}
class Queue{
constructor(value) {
    this.first = null;
    this.last = null;
        this.size=0;
    }
    enqueue(val){
        var newNode =new Node(val);
        if(!this.first){
            this.first= newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(val){
        if(this.first === 0) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;

            // the second item will become the first item
        } this.first = this.first.next;
        this.size--;
        // retirn the first value that we removed
        return temp.value;
    }   

}

var q= new Queue()

q.enqueue("FIRST")

q.enqueue("SECOND")

q.enqueue("LAST")

console.log(q)

q.dequeue()
console.log(q)
q.dequeue()
console.log(q)

q.dequeue()
console.log(q)
