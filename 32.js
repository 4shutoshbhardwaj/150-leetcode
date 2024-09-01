// https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150

function minWindow(s, t) {
    if(t.length>s.length)return "";
    var tc=new Map();
    for(var char of t){
        tc.set(char,(tc.get(char)||0)+1);
    }
    var rr=tc.size;
    var left=0, right=0;
    var ff=0;
    var wc=new Map();
    var ml=Infinity;
    var result="";
    while(right<s.length){
        var char=s[right];
        wc.set(char,(wc.get(char)||0)+1);
        if(tc.has(char)&&wc.get(char)==tc.get(char)){
            ff++;
        }
        while(left<=right&&ff==rr){
            if(right-left+1<ml){
                ml=right-left+1;
                result=s.slice(left,right+1);
            }
            var leftChar=s[left];
            wc.set(leftChar,wc.get(leftChar)-1);
            if(tc.has(leftChar)&&wc.get(leftChar)<tc.get(leftChar)){
                ff--;
            }
            left++;
        }
        right++;
    }
    return result;
}