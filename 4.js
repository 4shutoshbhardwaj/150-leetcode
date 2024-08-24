// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function(nums) {
    if(nums.length<=2)return nums.length;
    var j=2;
    for(var i=2;i<nums.length;i++){
        if(nums[i]!==nums[j-2]){
            nums[j]=nums[i];
            j++;
        }
    }
    return j;
};