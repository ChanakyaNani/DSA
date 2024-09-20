// stack data structure
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    // add an element to the top of the stack
    push(val){
        let newNode = new Node(val);
        if(this.top){
            newNode.next = this.top;
        }
        this.top = newNode;
        this.size++;
    }

    //pop
    pop(){
        if(!this.top){
            return 'no elements to pop';
        }
        let val = this.top.value;
        this.top = this.top.next;
        this.size--;
        return val;
    }

    isEmpty(){
        return this.size == 0;
    }

    //print stack
    printStack(){
        let cur = this.top;
        let res = [];
        while(cur){
            res.push(cur.value);
            cur = cur.next;
        }
        console.log(res);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log(stack.pop());
stack.printStack();

