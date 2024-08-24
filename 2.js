// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

var removeElement = function(nums, val) {
    while(nums[nums.length-1]==val)nums.pop();
    var a=0;
    while(a<nums.length){
        var z=nums.length-1;
        if(nums[a]==val){
            nums=swap(a,z,nums);
            while(nums[nums.length-1]==val){
                nums.pop();
            }
            console.log(nums);
            a++;
        }else{
            a++;
        }
    }
};

function swap(a,b,arr){
    var temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    return arr;
}