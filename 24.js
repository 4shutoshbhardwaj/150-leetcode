// https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150

var isPalindrome = function(s) {
    var str="";
    for(var i=0;i<s.length;i++){
        var q=s[i].charCodeAt(0);
        if((q>96&&q<123)||(q>64&&q<91)){
            str=str+s[i];
        }
    }
    var i=0;
    var j=str.length-1;
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
};