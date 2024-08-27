// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

function romanToInt(s) {
    var obj={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var t=0;
    for(var i=0;i<s.length;i++){
        var c=obj[s[i]];
        var n=obj[s[i+1]];
        if(n>c){
            t-=c;
        }else{
            t+=c;
        }
    }
    return t;
}