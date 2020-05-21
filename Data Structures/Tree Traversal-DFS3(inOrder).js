
class Node{
    constructor(value){
        this.value = value;
        this.right= null;
        this.left= null;
    }
    
    }
    
    class BinarySearchTree{
    constructor() {
        this.root = null;
     //   console.log(this);
    
        }
        insert(value){
            var newNode = new Node(value);
            if(this.root === null){
            this.root = newNode;
         //   console.log(this);
            // this here will is with refernce ot the object =tree that we created and it will be binary search tree with constructor
        //    console.log(this.root);
    
            return this;
        } else {
            var current = this.root;
            console.log(current);
            // while loop will work over and over once the onside body condition go false
            while (true){
    
                if(value === current.value) return undefined;
                if(value < current.value ){
                    if(current.left === null){
                        current.left =newNode;
                        ////// this return will break the while loop
                        return this;
                        // we can delete the else down as its common that if that if deosnt work then it will else for sure else {current =current.left;
                    } {current =current.left; }     
            }
    
            
            else if (value > current.value){
                if (current.right === null){
                    current.right =newNode;
                                        ////// this return will break the while loop
    
                    return this;
    
                }else {current = current.right;}
            }
        }} 
        }
        find(value){
            if(this.root === null) return false;
            var current =this.root;
          var  found =false;
            // we put the start in while loop, as because there maybe me cant find something (here= false i.e we not getting return found) but once we dont have any more start then loop should be off
            while(current && !found){
                if(value < current.value){
                current = current.left;
                // we will not use return here as it will end the loop as we dont need it b/c loop will end if no elemets left or found =true
              //  return current;
                }
            else if (value >current.value){
                current =current.right;
             //   return current;
             // if not greater or less then it will be equal and the n we retur nas true
            } else{
            //    found =true;
         //   return true; or the value
         return current;
            }
            }
            // after all the above if not found then return undefined as well
            //if(!found) return undefined;
            // if we have only one return belwo then we have to write the above !found statemet
      //  return current;
      return false;
    }
        DfsinOrder(){
        var data =[]
        //console.log(data);
        function traverse(node){
        // node.left && traverse(node.left) will also work the same
        if (node.left) traverse(node.left);
        data.push(node.value)
                // node.right && traverse(node.right) will also work the same

        if(node.right) traverse(node.right);
        
        }
        // the below tracverse invoke the helperfunction
        traverse(this.root);
        console.log(data);
        return data;
    }       

    }
    
     var tree = new BinarySearchTree();
    // console.log(tree);
    
     tree.insert(10);
    // console.log(tree);
    // tree.root = new Node(10);
    // tree.root.right =new Node(15);
    // tree.root.left =new Node(7);
    // tree.root.left.right = new Node(9);
    // console.log(tree);
    // console.log(tree.root.left.right);
    
    tree.insert(7);
    tree.insert(44);
    tree.insert(33);
    tree.insert(2);
    console.log(tree);
    
    tree.find(7);
    
    console.log("we found it",tree.find(33));
    
    console.log("we found it",tree.find(101));

   console.log( tree.inOrder())
        
      
    