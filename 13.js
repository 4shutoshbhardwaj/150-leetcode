// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

var canCompleteCircuit = function(gas, cost) {
    let tt=0;
    let ct=0;
    let ss=0;
    for (var i=0;i<gas.length;i++){
        tt+=gas[i]-cost[i];
        ct+=gas[i]-cost[i];
        if(ct<0){
            ss=i+1;
            ct=0;
        }
    }
    return tt>=0?ss:-1;
};
