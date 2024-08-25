// https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

var jump = function(nums) {
    var j=0;
    var l=0;
    var r=0;
    while(r<nums.length-1){
        var longest=0;
        for(var i=l;i<=r;i++){
            longest=Math.max(i+nums[i],longest);
        }
        l=r+1;
        r=longest;
        j++;
    }
    return j;
};