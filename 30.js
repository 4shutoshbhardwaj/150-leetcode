// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

function lengthOfLongestSubstring(s) {
    var ml=0;
    var l=0;
    var map=new Map();
    for(var i=0;i<s.length;i++){
      var cc=s[i];
      if(map.has(cc)&&map.get(cc)>=l){
        l=map.get(cc)+1;
      }
      map.set(cc,i);
      ml=Math.max(ml,i-l+1);
    }
    return ml;
}
  