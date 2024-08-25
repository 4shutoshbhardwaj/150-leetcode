// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

var canJump = function(nums) {
    var mr=0;
    for(var i=0;i<nums.length;i++){
        if(i>mr)return false;
        mr=Math.max(mr,i+nums[i]);
        if(mr>=nums.length-1)return true;
    }
    return false;
};