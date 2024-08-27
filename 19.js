// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

function longestCommonPrefix(strs) {
    if(strs.length==0)return "";
    var p = strs[0];
    for(var i=1;i<strs.length;i++){
        var c=strs[i];
        while(c.indexOf(p)!=0){
            p=p.substring(0,p.length-1);
            if(p=="")return "";
        }
    }
    return p;
}