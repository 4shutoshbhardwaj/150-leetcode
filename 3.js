// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function(nums) {
    var u=0;
    var c=0;
    for(var i=1;i<nums.length;i++){
        if(nums[i]!=nums[u]){
            u++;
            nums[u]=nums[i];
        }
    }
    for(var j=0;j<nums.length;j++){
        if(nums[j]>=nums[j+1]){
            c=nums.length-j-1;
            break;
        }
    }
    while(c>0){
        nums.pop();
        c--;
    }
};