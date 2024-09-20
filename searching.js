// binary search
// return index of the element n in arr
function binSearch(arr,n){
    let len = arr.length;
    let left =0, right=len-1;

    function binS(arr,n,left,right){
        if(left>right){
            return -1; // if no element found
        }

        let mid = Math.floor((left+right)/2);
        if(arr[mid] == n){
            return mid; // if element found
        }
        else if(arr[mid] > n){ // serach in left half
           return binS(arr,n,left,mid-1);
        } else{
            return binS(arr,n,mid+1,right);
        }
    }
    return binS(arr,n,left,right);
}
let arrBS = [0,1,2,3,4,5,8,14,17,19];
let ele = 17;
console.log('index of element is ',binSearch(arrBS,ele));