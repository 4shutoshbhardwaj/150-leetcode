// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

var merge = function(nums1, m, nums2, n) {
    var a=m-1;
    var b=n-1;
    var c=(m+n)-1;
    var result=[];
    while(a>=0&&b>=0){
        if(nums2[b]<nums1[a]){
            nums1[c]=nums1[a];
            a--;
        }else{
            nums1[c]=nums2[b];
            b--;
        }
        c--;
    }
    while(b>=0){
        nums1[c]=nums2[b];
        c--;
        b--;
    }
};