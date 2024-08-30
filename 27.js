// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

function maxArea(height) {
    var l=0;
    var r=height.length-1;
    var mw=0;
    while(l<r){
        var w=r-l;
        var ch=Math.min(height[l],height[r]);
        var cw=w*ch;
        mw=Math.max(mw,cw);
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return mw;
}