/**
 * TODO: 1189. Maximum Number of Balloons
Easy
Topics
premium lock icon
Companies
Hint
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.



Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0


Constraints:
1 <= text.length <= 104
text consists of lower case English letters only.
*/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
 let freq=new Map();
 let min=0;
 for(let i=0;i<text.length;i++){
  freq.set(text[i],(freq.get(text[i])||0)+1)
 }

 const b = freq.get('b') || 0;
    const a = freq.get('a') || 0;
    const l = Math.floor((freq.get('l') || 0) / 2);
    const o = Math.floor((freq.get('o') || 0) / 2);
    const n = freq.get('n') || 0;

    return Math.min(b, a, l, o, n);
};