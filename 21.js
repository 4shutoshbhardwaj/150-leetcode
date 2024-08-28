// https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150

function convert(s, numRows) {
    if(numRows==1||s.length<=numRows)return s;
    var r=new Array(Math.min(numRows,s.length)).fill("");
    var cr=0;
    var gd=false;
    for(var char of s) {
        r[cr]+=char;
        if(cr==0||cr==numRows-1)gd=!gd;
        cr+=gd?1:-1;
    }
    return r.join('');
}