
var mergeAlternately = function(word1, word2) {
    let res = '';
    for(let i=0; i< Math.max(word1.length, word2.length);i++){
        if(i < word1.length) res += word1[i];
        if(i < word2.length) res += word2[i];
    }
    return res;
};


const gcdOfStrings = function(str1, str2) {
    // handling the base case of both are not similar strings
    if(str1 + str2 !== str2 + str1) return '';
    let a = str1.length;
    let b = str2.length;
    // find the HCF of these two string lengths and that is our substring
    while(b){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return str1.substring(0,a);
};

let str1 = "ABCABC";
let str2 = "ABC";
var gcdStr = gcdOfStrings(str1,str2);
console.log('gcd of strings are' ,gcdStr);

/*
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i] == 0 && !flowerbed[i-1] && !flowerbed[i+1]){
            n--;
            i++;
        }
    }
    
    return n<=0;
};

let flowerbed = [0,0,1,0,1], n = 1;
console.log('flowers ',canPlaceFlowers(flowerbed,n));

var reverseVowels = function(s) {
    let revStr = '', vowels = "AEIOUaeiou", vow = '', i=0;
    for(let char of s){
        if(vowels.includes(char)){
            vow += char;
        }
    }

    vow = vow.split('').reverse().join('');

    for(let char of s){
        if(vowels.includes(char)){
            revStr += vow[i];
            i++;
        }else{
            revStr += char;
        }
    }

    return revStr;
};

var reverseVowels2 = function(s) {
    let vowels = "AEIOUaeiou";
    s = s.split('');

    let i = 0, j= s.length-1;

    while(i<j){
        if(!vowels.includes(s[i])){
            i++;
        }
        else if(!vowels.includes(s[j])){
            j--;
        }
        else {
            [s[i],s[j]] = [s[j],s[i]];
            i++;
            j--;
        }
    }

    return s.join('');
};

var reverseWords = function(s) {
    s = s.trim();
    let ans = '';
    let wordArr = s.split(' ');
    console.log('wordarr is', wordArr);
    for(let i=wordArr.length-1;i>0;i--){
        if(wordArr[i] != '')
            ans += wordArr[i] +' ';
    }
    return ans+wordArr[0];
};
var reverseWords2 = function(s) {
    return s.trim().split(' ').filter(s => s!='').reverse().join(' ');
};
let rws = " the sky is       blue ";
console.log('reversed words are',reverseWords(rws));

var productExceptSelf = function(nums) {
    const len = nums.length;
    const prefixArr = new Array(len).fill(1);
    const suffixArr = new Array(len).fill(1);
    const productArr = [];

    //compute the prefix products
    for(let i=1;i<len;i++){
        prefixArr[i] = prefixArr[i-1] * nums[i-1];
    }
    // compute the suffix products
    for(let i=len-2;i>=0;i--){
        suffixArr[i] = suffixArr[i+1] * nums[i+1];
    }
    // comptue products except self
    for(i=0;i<len;i++){
        productArr[i] = prefixArr[i] * suffixArr[i];
    }

    return productArr;
    
};
var productExceptSelf2 = function(nums) {
    const len = nums.length;
    const productArr = [];
    let preProd = 1; // no need of a full array.
    let sufProd = 1;


    //compute the prefix products
    for(let i=0;i<len;i++){
        productArr[i] = preProd;
        preProd *= nums[i];
    }
    // compute the suffix products
    for(let i=len-1;i>=0;i--){
        productArr[i] *= sufProd; // instead of another loop, multiplying here.
        sufProd *= nums[i];
    }

    return productArr;
    
};
let pes = [1,2,3,4];
let pes2 = [-1,1,0,-3,3]
console.log('product self ',productExceptSelf2(pes));


var increasingTriplet = function(nums) {

    let smallest = Infinity;
    let secSmall = Infinity;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>secSmall && secSmall>smallest) return true;
        if(nums[i]>smallest) secSmall = nums[i];
        else smallest = nums[i];
    }
    
    return false;
};
let it = [2,1,5,0,4,6];
let it2 = [20,100,10,12,5,13];
console.log('triplet ',increasingTriplet(it2));

var compress = function(chars) {
    
    let i=0,j=0;

    while(j < chars.length){
        let count = 0;
        let curChar = chars[j];
        // counting loop
        while(j<chars.length && chars[j]==curChar){
            j++;
            count++;
        }
        chars[i++] = curChar;
        // change the array in place
        if(count>1){
            for(digit of count.toString()){
                chars[i++] = digit;
            }
        }
    }

    return i;
};


var moveZeroes = function(nums) {
    let i=0,j=0;// i is the 0 pointer, j is the non-zero pointer
    while(i<nums.length){
        if(nums[i]!=0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            j++;
        }
        i++;
    }
    return nums;
};
let zarr = [0,1,0,3,12];
console.log('move zeroes ',moveZeroes(zarr));


var isSubsequence = function(s, t) {
    let len = t.length;
    let i=0,j=0; // i or s, j for t
    while(j<len && i<s.length){
        if(s[i] != t[j]){
            j++;
        }else{
            i++;
            j++;
        }
    }
    if(i == s.length) return true;
    return false;
};
let s = "abc", t = "ahbgdc", s2 = "axc", t2 = "ahbgdc"
console.log('isSubseq ',isSubsequence(s,t));

var maxArea = function(height) {
    let maxW = 0;
    let left =0;
    let right = height.length-1;

    while(left < right){
        maxW = Math.max(maxW, (right-left)*Math.min(height[left],height[right]));
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxW;
};
let hw = [1,8,6,2,5,4,8,3,7];
console.log('max area is ',maxArea(hw));


var maxOperations = function(nums, k) {
    let set = {};
    let count=0;

    for(let i of nums){
        let x = k-i;
        if(set[x]>=1){
            count++;
            set[x]--;
        }else{
            set[i]? set[i]++ : set[i]=1;
        }
    }
    return count;
};


var findMaxAverage = function(nums, k) {
    let len = nums.length;
    let kSum =0;
    let maxSum=0;
    for(let i=0;i<k;i++){
        kSum += nums[i];
    }
    maxSum = kSum;
    //console.log('ksum after 1st loop',kSum);
    for(let i=k,j=0;i<len;i++,j++){
        kSum = kSum + nums[i] - nums[j];
       // console.log('ksum in 2nd loop',kSum);
        if(kSum > maxSum){
            maxSum = kSum;
        }
    }
    return maxSum/k;
};
let maa = [1,12,-5,-6,50,3], mak =4;
let maa2 = [5], mak2 =1;
console.log('max avg, ',findMaxAverage(maa2,mak2));

var maxVowels = function(s, k) {
    let maxVow = 0;
    const vowels = 'aeiou';

    for(i=0;i<s.length;i++){
        let curVow = 0;
        for(let j=i;j<i+k;j++){
            if(vowels.includes(s[j])){
                curVow++;
            }
        }
        //console.log(curVow);
        maxVow = Math.max(maxVow,curVow);
    }

    return maxVow;

};
let mvs = "leetcode", mvk = 3
console.log('maxvowels ',maxVowels(mvs,mvk));

var maxVowels2 = function(s, k) {
    
    let maxVow = 0;
    const vowels = 'aeiou';
    let curVow = 0;
    for(let i=0;i<k;i++){
        if(vowels.includes(s[i])){
            curVow++;
        }
    }
    maxVow = Math.max(maxVow,curVow);
    
    let i=1,j=k;
    while(i<s.length){
        if(vowels.includes(s[i-1])){
            curVow--;
        }
        if(vowels.includes(s[j])){
            curVow++;
        }
        maxVow = Math.max(maxVow,curVow);
        i++;
        j++;
    }

    return maxVow;

};
let mvs2 = "tnfazcwrryitgacaabwm", mvk2 = 4;
console.log('maxvowels2 ',maxVowels2(mvs2,mvk2));

var longestOnes = function(nums, k) {
    // our sliding window(left to right) is when no's of zeroes reaches k
    // maintain this sliding window and update the counts (since it is just 1 & 0, we are using right-left, otherwise we'll create a local count variable)
    let left=0;
    let res = 0;
    let zc = 0;
    for(let right=0;right<nums.length;right++){
        if(nums[right] == 0){
            zc++;
        }
        while(zc > k){
            if(nums[left] == 0){
                zc--;
            }
            left++;
        }
        res = Math.max(res,right-left+1);
    }

    return res;
};
let l1s = [1,1,1,0,0,0,1,1,1,1,0], l1k = 2;
let l1s2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], l1k2 = 3;
console.log('longest ones ',longestOnes(l1s2,l1k2));


var longestSubarray = function(nums) {
    let left =0;
    let res = 0;
    let zc = 0;
    for(let right=0;right<nums.length;right++){
        if(nums[right]==0){
            zc++;
        }
        while(zc > 1){
            if(nums[left] == 0){
                zc--;
            }
            left++;
        }
        res = Math.max(res,right-left);
    }
    return res;
};

var largestAltitude = function(gain) {
    let hal = 0;
    let curAl = 0;
    for(let i=0;i<gain.length;i++){
        curAl += gain[i];
        hal = Math.max(hal,curAl);
    }

    return hal;
};

var pivotIndex = function(nums) {
    let leftSum =0;
    let rightSum =0;
    let i=1,j=nums.length-2;
    let pi = 0;
    let totalSum = 0;
    for(let i=0;i<nums.length;i++){
        totalSum += nums[i];
    }
    for(let i=0;i<nums.length;i++){
        if(i!=0) leftSum += nums[i-1];
        if(leftSum == (totalSum-leftSum-nums[i])){
            return i;
        }
    }
    return -1;
};
let pivarr = [1,7,3,6,5,6];
console.log('pivot index ,',pivotIndex(pivarr));

let mapobj = {};
let myMap = new Map();
myMap.set("key1","value1");
myMap.set(12,"val2");
myMap.set(mapobj,"val3");
console.log('mymap ',myMap.get(mapobj));
//Map is more versatile than Object as it allows any data type for keys (not just strings or symbols), maintains the order of insertion, and provides better performance when working with frequent additions and deletions.

// iterating through the map
myMap.forEach((val,key) =>{
    console.log(key,val);
})
myMap.delete(12);

for(let [key,val] of myMap){
    console.log(key,' ',val);
}
for(let key of myMap.keys()){
    console.log(key);
}
for(let val of myMap.values()){
    console.log(val);
}

var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let ds1 = [];
    let ds2 = [];
    for(let n of set1){
        if(!set2.has(n)) ds1.push(n);
    }
    for(let n of set2){
        if(!set1.has(n)) ds2.push(n);
    }

    return [ds1,ds2];

};
let nums1 = [1,2,3,3], nums2 = [1,1,2,2];
let numsad1 = [83,-98,-78,35,-98,79,-21,-33,53], numsad2 = [58,-10,29,-57,-2,-39,-60,18,17,-37]
console.log('array diff ',findDifference(numsad1,numsad2));

var uniqueOccurrences = function(arr) {
    let umap = new Map();
    for(let n of arr){
        if(umap.has(n)){
            umap.set(n,(umap.get(n)+1));
        }else{
            umap.set(n,1);
        }
    }
    let set = new Set(umap.values());
    return set.size == umap.size;

};

var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false;
    let map1 = {};
    let map2 = {};
// create key-value of char and count
    for(let i=0;i<word1.length;i++){
        if(map1[word1[i]]){
            map1[word1[i]]++;
        }else{
            map1[word1[i]] = 1;
        }

        if(map2[word2[i]]){
            map2[word2[i]]++;
        }else{
            map2[word2[i]] = 1;
        }
    }

    // if chars in the words are not same
    const uword1 = new Set(word1); // set can be constructed with arrays or strings
    const uword2 = new Set(word2);
    // if not same, return false
    if(!checkIsUnique(uword1,uword2)) return false;
    // if same, check count of chars
    return freqOfChars(map1,map2);

};

function checkIsUnique(uword1,uword2){
    for(let c of uword1){
        if(!uword2.has(c)) return false;
    }
    return true;
}

function freqOfChars(map1,map2){
    let vals1 = Object.values(map1).sort((a,b)=>a-b);
    let vals2 = Object.values(map2).sort((a,b)=>a-b);// sort ascending
    for(let i=0;i<vals1.length;i++){
        if(vals1[i] != vals2[i]) return false;
    }
    return true;
}

var equalPairs = function(grid) {
    let res = 0;
    for(let i=0;i<grid.length;i++){
        let row = grid[i].join(); // row to string
        for(let j=0;j<grid.length;j++){ // since it is an nxn array
            // now get each column(jth) using map() function of arrays and compare with the ith row
            let col = grid.map(r => r[j]).join();
            if(row == col) res++;
        }
    }
    return res;
};

var removeStars = function(s) {
    let i=0;
    let stk = [];
    while(i<s.length){
        if(s[i]=="*"){
            if(stk.length>0)
                stk.pop();
        }else{
            stk.push(s[i]);
        }
        i++;
    }
    return stk.join('');
};

var asteroidCollision = function(asteroids) {
    let stk = [];
    for(let i=0;i<asteroids.length;i++){
        let cur = asteroids[i];
        let top = stk[stk.length-1];
        if(!stk.length || top<0 || cur>0){
            stk.push(cur);
        }else if(-cur == top){
            stk.pop();
        }else if(-cur > top){
            stk.pop();
            i--;
        }
    }
    return stk;
};
let astarr =  [5,10,-5], astarr2 = [8,-8], astarr3 = [10,2,-5];
console.log('asteroids ',asteroidCollision(astarr3));

var decodeString = function(s) {
    let stk = [];
    for(let c of s){
        if(c!=']'){
            stk.push(c);
            continue;
        }
        let top = stk.pop();
        let subStr = "";
        while(top != '['){
            subStr = top + subStr;
            top = stk.pop();
        }
        top = stk.pop();
        let num = "";
        while(!Number.isNaN(Number(top))){
            num = top + num;
            top = stk.pop();
        }
        num = Number(num);
        stk.push(top);
        stk.push(subStr.repeat(num));
    }

    return stk.join('');
};

var predictPartyVictory = function(senate) {
    senate = senate.split('');
    while(senate.length){
        let first = senate.shift();// getting the 1st element in a queue(as an arr)
        let len = senate.length;
        
        for(var i=0;i<len;i++){
            if(first != senate[i]){
                senate.splice(i,1); // banning one senator 
                senate.push(first); // going back to queue since he is not yet banned, to get another chance
                break;
            }
        }
        if(i==len) { // victory announcing condition
            return first == 'D' ? 'Dire' : 'Radiant';
        }
    }
};

var deleteMiddle = function(head) {
    if(!head || !head.next){
        return null;
    }

    let slow = head, fast = head.next.next;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;

};

var oddEvenList = function(head) {
    if(!head || !head.next || !head.next.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;
    //let oddInc = true, evenInc = true; // to check if there is no more either odd or even indices of LL to navigate
    while(odd && even && ((odd.next && odd.next.next) || (even.next && even.next.next))){
        if(odd.next && odd.next.next){
            odd.next = odd.next.next;
            odd = odd.next;
        }
        if(even.next && even.next.next){
            even.next = even.next.next;
            even = even.next;
        }
    }
    odd.next = evenHead;
    even.next = null;

    return head;
    
};

var reverseList = function(head) {
    if(!head) return head;
    let prev = head;
    let cur = head.next;
    while(cur != null ){
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    head.next = null;
    return prev;
};

var pairSum = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    fast = slow.next;
    slow.next = null;

    let h2 = fast;
    let pr = null;
    while(h2){
        let temp = h2.next;
        h2.next = pr;
        pr = h2;
        h2 = temp;
    }
    // prev is the new head of the reversed 2nd half of the list now;

    let max = 0;
    while(pr){
        max = Math.max(max,(head.val + pr.val))
        pr = pr.next;
        head = head.next;
    }
    return max;

};

var maxDepth = function(root) {
    if(root==null) return 0;
    
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
    
};

var leafSimilar = function(root1, root2) {
    function dfs(node, leafs){
        if(!node) return null;
        if(node.left == null  && node.right ==null ){
            leafs.push(node.val);
        }
        dfs(node.left,leafs);
        dfs(node.right,leafs);
        return leafs.join(','); // to distinguish 1,12 and 11,2 as different after concatenation, otherwise both come to 112.
        // // can't just return leafs instead of leafs.join(',') because then in the next step comparision, arrays are compared by reference 
        // whereas strings are compared by value. So, even if the elements in the array are same, it'll return false
    }
    return dfs(root1,[]) == dfs(root2,[]);
};

var goodNodes = function(root) {
    let count = 0;
    function goodNodesHelper(root, max){
        if(!root) return null;
        if(root.val>=max){
            max = root.val;
            count++;
        } 
        goodNodesHelper(root.left,max);
        goodNodesHelper(root.right,max);
        
    }
    let max = root.val;
    goodNodesHelper(root,max);

    return count;

};

var pathSum = function(root, targetSum) {
    // prefix sum with dfs traversal 
    // https://authorslog.com/blog/npX7ScDGUT?title=437.-path-sum-iii
    let res = 0;

    function sdfs(node, pathSum){ // declare the path as an array so that we can use array functions in it
        if(!node) return;

        const newPathSum = pathSum.map(v=>v+node.val);
        newPathSum.push(node.val);

        newPathSum.forEach(v=>{
            if(v==targetSum){
                res++;
            }
        });

        sdfs(node.left, newPathSum);
        sdfs(node.right, newPathSum);

    }

    sdfs(root,[]);
    return res;
};

var longestZigZag = function(root) {
    let max =0;

    function dfsz(node,dir,len){
        if(!node) return;

        max = Math.max(max,len); // for each node visited, update the max to that len. Progressive max updation

        dfsz(node.left,'l', dir != 'l' ? len+1 : 1);// if same direction, reset the count, if opp dir, add to zig-zag len and proceed fwd
        dfsz(node.right,'r', dir != 'r'? len+1 : 1);
    }

    dfsz(root,'l',0);
    return max;
};

var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) return root; 
    //If you don't explicitly return a value in a recursive function, it will return null (or undefined in JavaScript).
//This behavior is what allows the recursive calls to naturally backtrack in your lowestCommonAncestor function, correctly identifying when p or q is not found in a particular subtree and passing that result up the stack.
//This implicit return of null is fundamental to making the recursive search efficient and logical when traversing binary trees or any recursive structure.

    var resL = lowestCommonAncestor(root.left,p,q); 
    var resR = lowestCommonAncestor(root.right,p,q);
    return ((resL && resR) ? root : (resL || resR));
};

