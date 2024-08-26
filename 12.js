// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

var productExceptSelf = function(nums) {
    let n=nums.length;
    let a=new Array(n).fill(1);
    let p=1;
    for(var i=0;i<n;i++){
        a[i]=p;
        p*=nums[i];
    }
    var s=1;
    for(var i=n-1;i>=0;i--){
        a[i]*=s;
        s*=nums[i];
    }
    return a;
};
