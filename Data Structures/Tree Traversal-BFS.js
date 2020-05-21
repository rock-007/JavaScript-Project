
// breath first search and depth first tree
function BFS() {
    var data =[];
    var queue =[];
  var  node = this.root;
    queue.push(this.root);
    while(queue.length){
        node =queue.shift()
        data.push(node);
        if (node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return data;
    }
    
    BFS()
    