// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function(nums) {
    var obj={};
    for(var i=0;i<nums.length;i++){
        var s=nums[i];
        if(obj[s]==undefined){
            obj[s]=1;
        }else{
            obj[s]++;
        }
    }
    var max=-Infinity;
    var m=-Infinity;
    for(var e in obj){
        if(max<obj[e]){
            max=obj[e];
            m=e;
        }
    }
    return m;
};