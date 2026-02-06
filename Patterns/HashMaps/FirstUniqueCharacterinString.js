/**
 *TODO: 387. First Unique Character in a String
Easy
Topics
premium lock icon
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1



Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
let freq=new Map();
let n=s.length;
for(let i=0;i<n;i++){
  freq.set(s[i],(freq.get(s[i])||0)+1);
}
for(let i=0;i<n;i++){
  if(freq.get(s[i])===1){
    return i;
  }
}
return -1;
};
const res1=firstUniqChar("leetcode")
const res2=firstUniqChar("loveleetcode")
const res3=firstUniqChar("aabb")

console.log(`Result->\n res1=${res1}\n res2=${res2}\nres3=${res3}\n`)