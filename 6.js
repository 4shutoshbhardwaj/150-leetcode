// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

var rotate = function(nums, k) {
    var nk=k;
    if(k>nums.length)nk=k%nums.length;
    console.log(nk);
    var p=nums.splice(nums.length-nk,nk);
    nums.unshift(...p);
    return nums;
};