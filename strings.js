// all string function questions here
function isAnagram(str, str2){
    return str.split('').sort().join() == str2.split('').sort().join();
}
console.log(isAnagram('abs','bsa'));

function isAnagram2(str, str2){
    if(str.length != str2.length){
        return false;
    }
    let freq = {};

    for(let c of str){
        freq[c] = (freq[c] || 0) + 1;
    }
    for(let c of str2){
        if(!freq[c]){
            return false;
        }
        freq[c]--;
    }
    return true;
}
console.log(isAnagram2('abs','bsa'));
