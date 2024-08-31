// https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

function minSubArrayLen(target, nums) {
    var ml=Infinity;
    var l=0;
    var sum=0;
    for(var right=0;right<nums.length;right++){
        sum+=nums[right];
        while(sum>=target){
            ml=Math.min(ml,right-l+1);
            sum-=nums[l];
            l++;
        }
    }
    return ml==Infinity?0:ml;
}