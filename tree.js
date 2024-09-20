// Node of a Binary bst
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.left = null;
        this.right = null;
    }
}


class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(node){
       // let newNode = new Node(node.value);
        if(!this.back)
            this.front = this.back = node;
        else{
            this.back.next = node;
        }
        this.back = node;
        this.size++;
    }

    dequeue(){
        if(!this.front) return null;
        let deq = this.front;
        this.front = this.front.next;
        if(!this.front){//only when 1 item is there
            this.back = null;
        }
        this.size--;

        return deq;
    }

    isEmpty(){
        return this.front == null;
    }
}
// Binary bst Data Structure implementation
class BinaryTree {
    constructor(){
        this.root = null;
    }

    //insert a node
    insert(val){
        let newNode = new Node(val);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    //search for a node
    search(node,value){
        if(node == null){
            return null;
        }
        if(value < node.value){
            return this.search(node.left, value);
        } else if( value > node.value){
            return this.search(node.right, value);
        }else{
            return node;
        }
    }
    //let inOdr = [];
    //inorder traversal
    inOrder(node, inOdr){
        if(node != null){
            this.inOrder(node.left, inOdr);
            inOdr.push(node.value);
            this.inOrder(node.right, inOdr);
        }
        return inOdr;
    }

    // preorder
    preOrder(node){
        if(node != null){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    //post order
    postOrder(node){
        if(node != null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    //height
    height(node){
        if(node == null) return -1; // use -1 to count the number of edges since the root is not counted in the height. if only root is present, then the height is 0
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight,rightHeight) + 1;
    }

    //print kth nodes
    kthNodes(node,k){
        let res = [];

        function kthValues(node,k,n){
            if(node == null){
                return null;
            }
            if(n == k){
                res.push(node.value);
                return;
            }
            kthValues(node.left,k,n+1);
            kthValues(node.right,k,n+1);
        }

        kthValues(node,k,0);
        return res;
    }

    // level order traversal
    levelOrder(node){
        
        if(node == null) return ;

        let que = new Queue();
        que.enqueue(node);
        
        while(!que.isEmpty()){
            let lot = [];
            let lvl = que.size;
            while(lvl>0){
                let cur = que.dequeue();
                lot.push(cur.value);

                if(cur.left != null){
                    que.enqueue(cur.left);
                }
                if(cur.right != null){
                    que.enqueue(cur.right);
                }
                lvl--;
            }
            console.log(lot.join(' '));
        }
        
        //return lot;
    }

    size(node){
        if(node == null) return 0;
        return this.size(node.left) + this.size(node.right) + 1;
    }

    lca(node,p,q) { // lowest common ancestor
        if(node == null) return null;

        if(p < node.value && q < node.value){
            return this.lca(node.left,p,q);
        } if(p > node.value && q > node.value){
            return this.lca(node.right,p,q);
        }
        return node.value;
    }
}

let bst = new BinaryTree();
bst.insert(3);bst.insert(10);bst.insert(1);bst.insert(6);bst.insert(14);bst.insert(4);bst.insert(7);bst.insert(13);bst.insert(23);bst.insert(110);bst.insert(165);bst.insert(63);bst.insert(141);bst.insert(74);bst.insert(17);bst.insert(73);
console.log('Inorder of BST is ',bst.inOrder(bst.root,[]));

let bst2 = new BinaryTree();
bst2.insert(10);
bst2.insert(20);
bst2.insert(30);
bst2.insert(8);
bst2.insert(7);
bst2.insert(6);
bst2.insert(9);
bst2.insert(15);
console.log('Inorder of BST-2 is ',bst2.inOrder(bst2.root,[]));

console.log('size of BST is ',bst2.size(bst.root,[]));

console.log('LCA of BST-2 is ',bst2.lca(bst2.root,30,15));


//bst.preOrder(bst.root);
//bst.postOrder(bst.root);

const node = bst.search(bst.root, 10);
if(node){
    console.log('node found ',node, ' ',node.value);
}
else{
    console.log('node not found');
}

console.log('height of BST is ', bst.height(bst.root));
console.log('kth nodes are', bst.kthNodes(bst.root,3));
console.log('lvl order is ', bst2.levelOrder(bst2.root));