class priorityQueue{
    constructor(){
        // this.value where we will store the heap
this.value =[];
    }
    // we will define a method doe Max binaryheap as insert and takes elemet as argumet
    enqueue(value, priority){
        let newNode =new Node(value, priority);
this.value.push(newNode);
    this.bubbleUp()}
// first push th value at the end and then with the formula (x-1/2 or x-2/2) to find the parent and comapre if the elemt is greater than the parent element then swap it otherwise its done and for all this we use method bubbleUp
// bubbleup is method 
bubbleUp(){
    //this.value.length-1= last element index value
 let idx= this.value.length-1;
 const element = this.value[idx];
 // first time it will be true and consectice time it wil lget result fromn inside body if it s true or not
 // can use while(true) amd but loop will keep runnig for te -ve idx values as well whcih we dont want
while(idx >0){
    // when going bakc to parent we dont use (idx-2)/2 Remember (always one parent and two child ) so one is enough
    let parenIdx = Math.floor((idx-1)/2);
    let parent = this.value[parenIdx];
   // if (element> parent) we can use this as well same result,
   
   
   { if (element.priority <= parent.priority) break;
        this.value[parenIdx] = element;
        this.value[idx]= parent;
        idx =parenIdx; 
    }
}}

    dequeue(){
        // the below will give us firsr element and save temp in max
    const max =this.value[0];
    // pop function will take the last item out and the value of the item will be end
        const end =this.value.pop();
        // this if loop works when if only one element is left otherwise the last lelemt will still be there forever 
        if(this.value.length>0){
        this.value [0]= end;
        // after me successfully removed th max we need to Bubble (sink down) the max value to top
        this.sinkDown()};
        return max;
}
sinkDown(){
    // or we can use idx=0 as we mostly replace it with the max value
let idx =0;
const length =this.value.length;
const element =this.value[idx];
while(true){
    let leftChildIdx = 2* idx +1;
    let rightChildIdx = 2* idx +2;
    let leftChild,rightChild;
    let swap =null;
    // we using the if condition brefore assinging the vlaues to a cvariable because we vwant ot avoid the senario when one parent might have oly one child or no child incase if end ellemets
    if(leftChildIdx <length){
        leftChild= this.value[leftChildIdx]
        if (leftChild.priority >element.priority){
            swap =leftChildIdx;
        }
    }    if(rightChildIdx <length){
        rightChild= this.value[rightChildIdx]

        if ((rightChild.priority >element.priority && swap ===null)||(swap !==null && rightChild.priority> leftChild.priority)){
            swap = rightChildIdx;
    }}

    // we are done here- while loop keep happening once we dont have any more to do
    if(swap === null) break;
    // if swap is somnethign then we have to set the swap (either right or left child)
    this.value[idx]= this.value[swap]
    // up one copies the contenets of the swap to another index position, down is setting the value of index swap
    this.value[swap]= element;

}}}




class Node{
            constructor(value, priority) {
                this.value =value;
                this.priority =priority;
    }


}
 
 let ER = new priorityQueue();

 ER.enqueue("common cold", 4)
 ER.enqueue("gunshot", 1)
 ER.enqueue("flue", 2) 
 ER.enqueue("pain", 3)
 ER.enqueue("headache", 7)
 ER.enqueue("dizzey", 6)
 ER.enqueue("vomiting", 5)


// when start deque it will rearrange in sequence
console.log(ER)
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
//     let heap =new priorityQueue();
//     console.log( heap.value);
// heap.insert(55)

//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
//    heap.extractMax();
//    console.log( heap.value);
