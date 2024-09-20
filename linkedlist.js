
// standard node class.
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

// singly linked list
class SinglyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //append a node to the end
    append(val){
        const newNode = new Node(val);
        if(!this.head){ // if head is not present or one node is also not there
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //prepend a node to the beginning
    prepend(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    insert(idx,val){
        if(idx<0 || idx> this.length) return null;

        if(idx == 0){
            return this.prepend(val);
        }
        if(idx == this.length){
            return this.append(val);
        }

        const newNode = new Node(val);
        const leaderNode = this.traverseToIdx(idx-1); // default pointing to the current node becasuse we are returning the cur node only. This points to SLL.
        const holdingPointer = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this; // leadernode is pointing to this here.
    }

    remove(idx){
        if(idx<0 || idx>this.length) return null;

        if(idx == 0){
            this.head = this.head.next;
            this.length--;
            return this;
        }

        const leaderNode = this.traverseToIdx(idx-1); // traverse to the node before the one you want to remove
        const unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        if(idx == this.length-1){
            this.tail = leader;
        }
        this.length--;
        return this;
    }

    traverseToIdx(idx){
        let curNode = this.head;
        let count = 0;
        while(count != idx){
            curNode = curNode.next;
            count++;
        }

        return curNode;
    }

    
    printList(){
        const arr = [];
        let curNode = this.head;
        while(curNode){
            arr.push(curNode.value);
            curNode = curNode.next;
        }
        console.log(arr);
    }

}

const mySLL = new SinglyLL();
mySLL.append(10);
mySLL.append(5);
mySLL.append(16);
mySLL.prepend(1);
mySLL.insert(2,99);
mySLL.printList();
mySLL.remove(2);
mySLL.printList();

class DoublyLL {
    constructor(val){
        let value = val;
        let next = null;
        let prev = null;
    }
}

// LRU Cache
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }

    removeTail() {
        let tail = this.tail.prev;
        this.removeNode(tail);
        return tail;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.dll = new DoublyLinkedList();
    }

    get(key) {
        let node = this.cache.get(key);
        if (!node) return -1;

        this.dll.moveToHead(node);
        return node.value;
    }

    put(key, value) {
        let node = this.cache.get(key);

        if (node) {
            node.value = value;
            this.dll.moveToHead(node);
        } else {
            let newNode = new Node(key, value);
            this.cache.set(key, newNode);
            this.dll.addNode(newNode);

            if (this.cache.size > this.capacity) {
                let tail = this.dll.removeTail();
                this.cache.delete(tail.key);
            }
        }
    }
}

// Example usage:
let lruCache = new LRUCache(3);
lruCache.put(1, 1);
lruCache.put(2, 2);
lruCache.put(3, 3);
console.log(lruCache.get(1)); // Output: 1
lruCache.put(4, 4);
console.log(lruCache.get(2)); // Output: -1 (since it was evicted)
console.log(lruCache.get(3)); // Output: 3
console.log(lruCache.get(4)); // Output: 4
