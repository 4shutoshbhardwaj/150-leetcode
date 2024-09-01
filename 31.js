// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/?envType=study-plan-v2&envId=top-interview-150

function findSubstring(s,words){
    if(!s||!words||words.length===0)return[];
    var wl=words[0].length;
    var twl=wl*words.length;
    var wc=new Map();
    for(var word of words){
        wc.set(word,(wc.get(word)||0)+1);
    }
    var result=[];
    for(var i=0;i<=s.length-twl;i++){
        var sw=new Map();
        var j=0;
        while(j<words.length){
            var word=s.substr(i+j*wl,wl);
            if(wc.has(word)){
                sw.set(word,(sw.get(word)||0)+1);
                if(sw.get(word)>wc.get(word)){
                    break;
                }
            }else{
                break;
            }j++;
        }if(j===words.length){
            result.push(i);
        }
    }
    return result;
}
