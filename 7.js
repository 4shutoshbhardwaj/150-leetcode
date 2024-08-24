// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// first solution (might give TLE)
var maxProfit = function(prices) {
    var ll=[];
    var min=Infinity;
    var rm=[];
    var max=-Infinity;
    for(var i=0;i<prices.length;i++){
        ll.push(Math.min(min,prices[i]));
        min=Math.min(min,prices[i]);
        rm.unshift(Math.max(max,prices[prices.length-1-i]));
        max=Math.max(max,prices[prices.length-1-i]);
    }
    var md=-Infinity;
    for(var k=0;k<ll.length;k++){
        md=Math.max((rm[k]-ll[k]),md);
    }
    return md;
};

// second solution
var maxProfit = function(prices) {
    let minp=Infinity;
    let maxpr=0;
    for(var i=0;i<prices.length;i++){
        minp=Math.min(minp,prices[i]);
        var pr=prices[i]-minp;
        maxpr=Math.max(maxpr,pr);
    }
    return maxpr;
};
