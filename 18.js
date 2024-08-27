// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

var lengthOfLastWord = function(s) {
    s=s.trim();
    for(var i=s.length-1;i>=0;i--){
        if(s[i]==" "){
            return s.length-1-i;
        }
    }
    return s.length;
};