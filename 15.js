// https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150

var trap = function(height) {
    let l=0,r=height.length-1;
    let lm=0,rm=0;
    let w=0;
    while(l<r){
        if(height[l]<height[r]){
            if(height[l]>=lm){
                lm=height[l];
            }else{
                w+=lm-height[l];
            }
            l++;
        }else{
            if(height[r]>=rm){
                rm=height[r];
            }else{
                w+=rm-height[r];
            }
            r--;
        }
    }    
    return w;
};
