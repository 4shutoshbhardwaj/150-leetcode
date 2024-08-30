// https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150

function threeSum(nums) {
    var r=[];
    nums.sort((a,b)=>a-b);
    for(var i=0;i<nums.length-2;i++){
        if(i>0&&nums[i]==nums[i-1])continue;
        var l=i+1;
        var h=nums.length-1;
        while(l<h){
            var sum=nums[i]+nums[l]+nums[h];
            if(sum==0){
                r.push([nums[i],nums[l],nums[h]]);
                while(l<h&&nums[l]==nums[l+1])l++;
                while(l<h&&nums[h]==nums[h-1])h--;
                l++;
                h--;
            }else if(sum<0){
                l++;
            }else{
                h--;
            }
        }
    }
    return r;
}