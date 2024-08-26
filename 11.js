// https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

var hIndex = function(citations) {
    citations.sort((a,b)=>a-b);
    for(var i=1;i<=citations.length;i++){
        if(citations[citations.length-i]<i)break;
    }
    return i-1;
};