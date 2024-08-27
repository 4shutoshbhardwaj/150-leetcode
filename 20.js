// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=top-interview-150

function reverseWords(s) {
    var w=s.trim().split(/\s+/);
    w.reverse();
    return w.join(' ');
}