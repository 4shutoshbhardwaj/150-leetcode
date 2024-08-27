// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

function intToRoman(num) {
    var obj=[
        ["M",1000],
        ["CM",900],
        ["D",500],
        ["CD",400],
        ["C",100],
        ["XC",90],
        ["L",50],
        ["XL",40],
        ["X",10],
        ["IX",9],
        ["V",5],
        ["IV",4],
        ["I",1]
    ];
    var r="";
    for(var[s,v] of obj){
        while(num>=v){
            r+=s;
            num-=v;
        }
    }
    return r;
}
