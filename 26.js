// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

function twoSum(numbers, target) {
    var l=0;
    var r=numbers.length-1;
    while(l<r){
      var sum=numbers[l]+numbers[r];
      if(sum==target){
        return [l+1,r+1];
      }else if(sum<target){
        l++;
      }else{
        r--;
      }
    }
  }