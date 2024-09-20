// stable sorts - Bubble sort, Insertion sort, merge sort
// unstable sorts - selection sort, quick sort, heap sort 
// basic sorts - insertion sort, bubble sort, selection sort

// bubble sort - O(n2)
function bubbleSort(arr){
    let lastIdx = arr.length-1;
    let count=0;
    
    for(let i=lastIdx;i>=0;i--){
        let swapped = false;
        let left=0,right=1;
        while(right<=i){
            if(arr[left]>arr[right]){
                [arr[left],arr[right]] = [arr[right],arr[left]];
                swapped = true;
            }
            left++;
            right++;
           // count++;
        }
       //console.log(count);
       if(!swapped) break; // if no swaps are made in a pass, break the loop
       
    }

    return arr;
}
let arrBS = [9,8,7,6,5,4,3,2,1];
let arr2BS = [1,2,3,4,5];
console.log('bubble sorted array is ',bubbleSort(arrBS));

// selction sort - less memory writes
// cycle sort - optimum for memory writes - O(n2)
function selectionSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            if(arr[j]<arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr;
}
let arrSS = [9,8,7,6,5,4,3,2,1];
let arrSS2 = [31,12,3,4,5];
console.log('selection sorted array is ',selectionSort(arrSS2));

// insertion sort
function insertionSort(arr){
     let n = arr.length;
     for(let i=1;i<n;i++){
        let key = arr[i];
        let j=i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]; // paralelly moving the elements to the right 
            j--;
        }
        arr[j+1] = key; // placing the element in the correct order
     }
     return arr;
}
let arrIS = [9,8,7,6,5,4,3,2,1];
let arrIS2 = [31,12,3,4,5];
console.log('insertion sorted array is ',insertionSort(arrIS));


// merge sort - O(nlogn) - stable sorting - O(nlogn) - O(n) extra space
function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    //recursively sort two arrays
    const leftSort = mergeSort(leftArr);
    const rightSort = mergeSort(rightArr);
    // merge the sorted arrays
    return merge(leftSort,rightSort);
}

function merge(left,right){
    let i=0,j=0;
    let mergedArr = [];

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            mergedArr.push(left[i]);
            i++;
        } else{
            mergedArr.push(right[j]);
            j++;
        }
    }

    // concatenate any remaining elements
    return mergedArr.concat(left.slice(i),right.slice(j));
}

let arrMS = [9,8,7,6,5,4,3,2,1];
let arrMS2 = [31,12,3,4,5];
console.log('merge sorted array is ',mergeSort(arrMS));


//quick sort - O(nlogn)
function quickSort(arr){
    if(arr.length <= 1)
        return arr;

    let pivot = arr[Math.floor(arr.length/2)];
    let leftArr = [];
    let rightArr = [];

    // partition the arrays as per the pivot
    for(let i=0;i<arr.length;i++){
        if(arr[i] == pivot) continue; // skip the pivot element

        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else{
            rightArr.push(arr[i]);
        }
    }

    return quickSort(leftArr).concat(pivot,quickSort(rightArr));
}
let arrQS = [9,8,7,6,5,4,3,2,1];
let arrQS2 = [31,12,3,4,5];
console.log('quick sorted array is ',quickSort(arrQS2));

//inplace quick sort
function qsInplace(arr, left=0, right = arr.length-1){
    
    if(left < right){
        let pivotIdx = partition(arr,left,right);
        qsInplace(arr,left,pivotIdx-1);
        qsInplace(arr,pivotIdx+1,right);
    }
    return arr;
}
function partition(arr,left,right){
    const pivot = arr[right];
    let i = left-1;
    for(let j=left;j<right;j++){
        if(arr[j] < pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]; // partition values less than pivot on one side
        }
    }
    [arr[i+1],arr[right]] = [arr[right],arr[i+1]]; // swap pivot at the end
    return i+1; // pivot element
}

let arrQSIP = [9,8,7,6,5,4,3,2,1];
let arrQSIP2 = [31,12,3,4,5];
console.log('quick sorted inplace array is ',qsInplace(arrQSIP));

// heap sort
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

// bucket sort

//counting sort

//radix sort

//cycle sort