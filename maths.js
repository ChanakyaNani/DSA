// count digits

function countDigits(n){
    if(n==0) return 1;
    return n.toString().length;
}

console.log(countDigits(82837237));

function countDigits2(x){
    if(x==0) return 1;
    x = Math.abs(x); //handle negatives
    let count = 0;
    while(x>0){
        x = Math.floor(x/10); // otherwise it'll take floating points also
        count++;
        //console.log(count);
    }

    return count;
}

console.log(countDigits2(-1878782));


//palindrome nuumber

function isPalindrome(x){
    x = x.toString();
    let newStr = x.split('').reverse().join(''); // split splits the string into an array with a delimiter, reverse reverses teh array. join, joins the array into a string
    return x === newStr;
}

console.log(isPalindrome(41233214));

function isPalindrome2(x){
    x  = x.toString();
    let start = 0;
    let end = x.length-1;

    while(start<end){
        if(!(x[start] == x[end])){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome2(412343214));

// factorial of a number

function getFactorial(n){
    if(n==0){
        return 1; // since 0! is 1;
    }else{
        return n * getFactorial(n-1);
    }
}

console.log(getFactorial(0));

function getFact2(n){
    let fact = 1;
    for(let i=2;i<=n;i++){
        fact *= i;
    }
    return fact;
}

console.log(getFact2(10));
// trailing zeroes
function getFactTrailZero(n){
    let count = 0;
    for(let i = 5; n/i >= 1; i *= 5){
        count += Math.floor(n/i);
    }
    return count;
}

console.log(getFactTrailZero(25));

// GCD or HDF 

function gcd(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
// using eucledian algorithm

    while(y!=0){
        let rem = x % y;
        x = y;
        y = rem;
    }
    return x;
}
console.log('gcd is ',gcd(56,98));

function gcd2(x,y){
    if(y==0)
        return x;
    return gcd2(y,x%y);
}
console.log('gcd2 is ',gcd(56,98));


function lcm(x,y){
    return (x*y)/gcd2(x,y);
}
console.log('lcm is ',lcm(411,63));


// prime number

function isPrime(n){
    if(n<=1) return false;
    if(n<=3) return true;

    if(n%2 == 0 || n%3 == 0)
        return false;

    for(let i=5; i*i <=n ; i += 6){ // 6k+1 logic
        if(n%i == 0 || n%(i+2) == 0){
            return false;
        }
    }
    return true;
}

console.log('isprime ',isPrime(131));

// Sieve of Eratosthenes

function soe(n){
    let primes = [];
    for(let i=1;i<=n;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(soe(8));

// nloglog(n)
function soe2(n){
    const isPrime = new Array(n+1).fill(true);

    isPrime[0] = isPrime[1] = false;

    for(let p=2; p*p <=n; p++){
        if(isPrime[p]){
            for(let i=p*p; i<=n; i+=p){
                isPrime[i] = false;
            }
        }
    }

    // collecting primes
    const primes = [];
    for(let i=2;i<=n;i++){
        if(isPrime[i]){
            primes.push(i);
        }
    }

    return primes;
}

console.log('soe2 ',soe2(24));

// power of 2 numbers

function pow(x,n){
    if(n==0) return 1;
    // if n is -ve
    if(n<0){
        x = 1/x;
        n = -n;
    }

    // recursive func
    function recPow(x,n){
        if(n == 0) return 1;

        let halfPow = recPow(x,Math.floor(n/2));
        if(n%2 == 0){
            return halfPow * halfPow;
        }
        else{
            return x * halfPow * halfPow;
        }
    }

    return recPow(x,n);
}

console.log('pow of x,n is ',pow(2,-2));

// bitwise power operators
function pow2(x,n){
    let res = 1;
    while(n>0){
        if(n%2 === 1){
            res *=x;
        }
        x *= x;
        n = Math.floor(n/2);
    }
    return res;
}
console.log('pow of x,n is ',pow2(2,5));


function pow3(x,n){
    if(n==0) return 1;
    if(n<0){
        x = 1/x;
        n= -n;
    }
    let res = 1;
    while(n>0){
        if(n%2 === 1){
            res *= x;
        }
        n = Math.floor(n/2);
        x *= x;
    }

    return res;
}
console.log('pow of x,n is ',pow3(2,8));

// time complexity is logn because we are traversing through the binary representation