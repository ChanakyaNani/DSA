class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(this.back){
            this.back.next = newNode;
        }else{
            this.front = newNode;
        }
        this.back = newNode;
        this.size++;
    }

    dequeue(){
        if(!this.front) return 'empty queue';
        let val = this.front.value;
        this.front = this.front.next;
        if(!this.front){
            this.rear = null;
        }
        this.size--;

        return val;
    }
}