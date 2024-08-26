// https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150

var candy = function(ratings) {
    var n = ratings.length;
    var c=new Array(n).fill(1);
    for(var i=1;i<n;i++){
        if(ratings[i]>ratings[i-1]){
            c[i]=c[i-1]+1;
        }
    }
    for (var i=n-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            c[i]=Math.max(c[i],c[i+1]+1);
        }
    }
    return c.reduce((a,b)=>a+b,0);
};