// 3,2,1,1,2,3

const output = document.querySelector("#output");

// give binary output or log of floor of base 2 log(n) base 2
function bin(n,ans){
    if(n<=0){
        return 0;
    }
    let b = [];
    function toBin(n){ // use higher order function or func inside function.
        if(n>0){
            toBin(Math.floor(n/2));
            b.push(n%2);
        }else{
            return 0;
        }
    }

    toBin(n);
    return b.join('');
    
}
console.log('binary is ',bin(8));
//output.innerText = bin(8);

// print all integers from n to 1

function n21(n){
    if(n<=0){
        return 0;
    }
    let ans = [];
    let output = [];
    let ans2 = [];

    function nto1(n){
        if(n==0) return 0;

        ans.push(n); 
        nto1(n-1);// for n to 1
        
    }
    nto1(n);

    
    function oneton(n){
        if(n==0) return 0;

        oneton(n-1);// for 1 to n
        ans2.push(n); 
    }
    oneton(n);

    output.push(ans);
    output.push(ans2);

    let ansRev = ans.slice().reverse();
    output.push(ansRev);
    return output;
}

console.log(n21(8));
//output.innerText = n21(8);

// factorial
function fact(n){
    if(n==0 || n==1)
        return 1;
    return n*fact(n-1);
}
console.log(fact(5));

//nth fibonacci
function fib(n){
    if(n==0) return 0;
    else if(n==1 || n==2) return 1;
    return fib(n-1)+fib(n-2);
}
console.log(fib(13));

function fibon(n){
    if(n < 0 ) return 0;
    if(n <= 1 ) return n;
    return fibon(n-1) + fibon(n-2);
}

//sum of n natural numbers
function sumN(n){
    if(n==0) return 0;
    return n+sumN(n-1);

    // return (n*(n+1))/2; // non recursive solution using formulae. Always check if there is a mathematical formula to solve the equation. it is always faster
}
console.log(sumN(5));

//palindrome check - non recursive
function palin(str){
    let str2 = str.split('').reverse().join('');
  //  console.log(str2);
    if(str === str2)
        return true;
    return false;
}
console.log(palin('aabjkbaa'));
//recursive palin
function palin2(str){
    let start = 0;
    let end = str.length-1;
    
    function palinRecur(str,start,end){
        if(start>=end) return true;
        if(str[start] != str[end]) return false;
        return palinRecur(str,++start,--end) ;
    }

    return palinRecur(str,start,end);

}
console.log(palin2('aabjkjbaa'));

//sum of digits of a number
function sumDigits(n){
    if(n==0) return 0;
    return (n%10) + sumDigits(Math.floor(n/10));
}
console.log(sumDigits(10));

//rope cutting problem
function ropeCut(n,a,b,c){
    if(n==0) return 0;
    // return -1 if we can't cut the rope according to a,b,c
    if(n<0) return -1;

    let resA = ropeCut(n-a,a,b,c);
    let resB = ropeCut(n-b,a,b,c);
    let resC = ropeCut(n-c,a,b,c);

    let max = Math.max(resA,resB,resC);
    if(max == -1) return -1;

    return max + 1;
}
console.log('the max pieces the rope can be cut? ',ropeCut(23,11,9,12));
//console.log('the max pieces the rope can be cut? ',ropeCut(5,1,2,4));

// generate all subsequences for a string 
function subsets(str){
    let res = [];

    function subs(cur,idx){
        if(idx == str.length){
            res.push(cur);
            return;
        }
        subs(cur, idx+1);
        subs(cur + str[idx], idx+1);
    }

    subs("",0);
    return res;

}
console.log(subsets("ABCD"));

// Tower of Hanoi
function toh(n,fromPeg,toPeg,auxPeg){
    if(n<1){
        console.log('give valid input');
        return;
    }
    if(n == 1){
        console.log(`Move disk from ${fromPeg} to ${toPeg}`);
        return;
    }

    toh(n-1,fromPeg,auxPeg,toPeg);
    console.log(`Move the disk from ${fromPeg} to ${toPeg}`);
    toh(n-1,auxPeg,toPeg,fromPeg);
}

toh(3,'A','C','B');

// Josepheus problem, i/p: 7, k=3; Who is the survivor
function jos(n,k){
    if(n == 1){
        return 0;
    }else{
        return (jos(n-1,k) + k) % n;
    }
}
console.log('josepheous problem ',jos(7,3));

// subset sum problem
function subsetSum(arr,n,sum){ // n is the length of the array
    if(sum == 0) return 1;
    if(n == 0) return 0;

    // If last element is greater than sum, ignore it
    if(arr[n-1] > sum){
        return subsetSum(arr,n-1,sum);
    }

    // Else, check the count of subsets with the last element included and excluded
    return subsetSum(arr,n-1,sum) + subsetSum(arr,n-1,sum-arr[n-1]);
}

function countSubsets(arr,sum){
    return subsetSum(arr,arr.length,sum);
}
let arrSS = [10,5,2,3,6];//[10,20,15];
let sum = 8;//25;
console.log('subset sum problem', countSubsets(arrSS,sum));

// print all permutations of a given string of same length only, this seems better than the swap function
function permutations(str){
    let res = [];
    let len = str.length;

    function getPerm(cur,rem){
        for(let k=0;k<len;k++){
            if(rem.length == k){
                res.push(cur);
                //return;
            }
        }

        for(let i=0;i<rem.length;i++){
            let next = cur + rem[i];
            let rest = rem.slice(0,i) + rem.slice(i+1);
            getPerm(next, rest);
        }
    }

    getPerm("",str);
    return res;
}
let str = "ABC";
console.log('permutations are ', permutations(str));

function getPerms2(str){
    let res = [];
// permute2
    function permute2(str,i){
        if(i == str.length - 1){
            res.push(str);
            return;
        }

        for(let j=i;j<str.length;j++){
            str = swap(str,i,j);
            permute2(str,i+1);
            swap(str,i,j); // backtracking
        }

    }

    function swap(str,i,j){
        let charArr = str.split('');
        [charArr[i],charArr[j]] = [charArr[j], charArr[i]];
        return charArr.join('');
    }

    permute2(str,0);
    return res;
}
let strP = "ABC";
console.log('swap permutations ',getPerms2(strP));

