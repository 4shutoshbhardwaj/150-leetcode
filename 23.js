// https://leetcode.com/problems/text-justification/description/?envType=study-plan-v2&envId=top-interview-150

function fullJustify(words, maxWidth) {
    var r=[];
    var cl=[];
    var cll=0;

    for (var word of words) {
        if(cll+word.length+cl.length>maxWidth){
            for(var i=0;i<maxWidth-cll;i++){
                cl[i%(cl.length-1||1)]+=' ';
            }
            r.push(cl.join(''));
            cl=[];
            cll=0;
        }
        cl.push(word);
        cll+=word.length;
    }
    r.push(cl.join(' ')+' '.repeat(maxWidth-cll-cl.length+1));
    return r;
}