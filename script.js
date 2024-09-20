let num =6;// parseInt(prompt("Enter the number"));
//let sumOfN = 0;
// for(let i=num;i>0;i--){
//     sumOfN = sumOfN + i;
// }
//console.log(`sum of 1 to ${num} is ${sumOfN}`);
console.log(`sum of 1 to ${num} is ${num*(num+1)/2}`);

//A function which takes another function as an argument or returns a function is called an higher order function
// order of growth C<loglog n<log n< n^1/3 < n^ 1/2 < n < n2 <n3<n4<2^n<n^n

const fib = (n)=>{
    if(n==0 || n==1)
        return n;
    let a=0, b=1,c;
    for(let i=2;i<=n;i++){
        c = a + b;
        a = b;
        b = c;
    } // space complexity is O(1) theta 
    return c;
};

console.log('nth fib number is ',fib(8));

const fibR = (n)=>{
    if(n==0 || n==1)
        return n;
    return fibR(n-1)+fibR(n-2); // auxillary space complexity is O(n)
};
console.log('nth fib number is ',fibR(8));