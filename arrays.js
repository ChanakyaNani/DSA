// search an element in an array
let arr = [114,25,23,6,109,233,814,343,108];
// largest element in an array
function largest(arr){
    let max = arr[0], maxi=0;
    
    for(let i in arr){
        if(arr[i]>max){
            maxi = i;
            max = arr[i];
        }
    }
    return maxi;
}
console.log('largest index in arr ',largest(arr));

function secondLargest(arr){
    let max = -Infinity,max2 = -Infinity;
    for(let n of arr){
        if(n>max){
            max2 = max;
            max = n;
        }
        if(n<max && n>max2){
            max2 = n;
        }
    }
    return max2;
}
console.log('second largest value in arr ',secondLargest(arr));

//check if sorted
function sorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=arr[i-1]){
            return true;
        }else{
            return false;
        }
    }
}
let arr2 = [1,2,3,4];
console.log('is array sorted? ',sorted(arr2));

// reverse the array
function reverse(arr){
    let first=0, last=arr.length-1,temp;
    while(first<last){
        temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
    return arr;
}
console.log('reverse of arr is ',reverse(arr2));

//remove duplicates from a sorted array
function removeDup(arr){
    let ui = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i] != arr[ui]){
            ui++;
            arr[ui] = arr[i];
        }
    }
    return arr.slice(0,ui+1);
}
let arrDup = [1,1,2,2,3,3,4,4,4,5,5];
console.log('removed duplicates ',removeDup(arrDup));

// left rotate array by D
function rotateArr(arr,d){
    if(d>arr.length)
        d = d% arr.length;

    let rotArr = arr.slice(d).concat(arr.slice(0,d));
    return rotArr;
}
let arrR = [1,2,3,4];
console.log('arr rotation by d ',rotateArr(arrR,5));