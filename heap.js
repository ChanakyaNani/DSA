// all about binary heap data structure
// the binary heap is a complete binary tree. If it is a complete binary tree, we can use array to store the heap values without wasting any space
// if so, then we can obtain left(i) = 2*i+1, right(i)=2*i+2, parent(i)=floor((i-1)/2)
function heapSort(arr){
    let n = arr.length;

    // build a max heap
    for(let i= Math.floor((n-2)/2); i >=0; i--){ // root of an element at index i of a binary tree is (i-1)/2, here (n-1) is the largest element or the last element, root of it is (n-1)-1/2. Here we are getting the last internal node (one level above the leaf node)
        maxHeapify(arr,n,i);
    }    

    // extract heap elements
    for(let l=n-1;l>0;l--){ // l is the number of elements in the array we are considering to maxHeapify()
        [arr[0],arr[l]] = [arr[l],arr[0]]; // swap the largest to the last - like selection sort
        maxHeapify(arr,l,0); // after swapping, heapify the array again. then again extract the first element, swap to last, reduce the heap we are working for (l) and continue till 1 element is only remaining. Then the array is sorted
    }

    return arr;
}

function maxHeapify(arr,n,i){
    let largest = i; // initialise largest as root.
    let left = 2*i + 1; // left index
    let right = 2*i + 2; // right index of the heap

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    // if largest is not root
    if(largest != i){
        [arr[i],arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr,n,largest);
    }
}
let arrHS = [9,8,7,6,5,4,3,2,1];
let arrHS2 = [31,12,3,4,5];
console.log('heap sorted array is ',heapSort(arrHS));