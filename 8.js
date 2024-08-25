// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

var maxProfit = function(prices) {
    var temp=prices[0];
    var sum=0;
    var t=false;
    for(var i=1;i<prices.length;i++){
        if(prices[i-1]>prices[i]){
            t=true;
            sum+=prices[i-1]-temp;
            temp=prices[i];
        }else if(i==prices.length-1){
            sum+=prices[i]-temp;
        }
    }
    if(!t)return prices[prices.length-1]-prices[0];
    return sum;
};