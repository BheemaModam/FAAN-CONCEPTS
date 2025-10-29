/*
todo: 3. Longest Substring Without Repeating Characters
Medium


Given a string s, find the length of the longest
without duplicate characters.

 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.


*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashMap = new Set();
  let substringLen = 0;

  for (let i = 0; i <= s.length; i++) {
    let count = 0;

    for (let j = i; j <s.length-1; j++) {
        console.log(`Char->${s[j]}`);
      if (!hashMap.has(s[j])) {

        count++;
        hashMap.add(s[j]);
        console.log(`count->${count}`);
      }      
      
    }
    console.log(`--------`);
    substringLen = Math.max(substringLen, count);
  }
  return substringLen;
};

const res1 = lengthOfLongestSubstring("abcabcbb");
console.log(`Result->${res1}`);
const res2 = lengthOfLongestSubstring("pwwkew");
console.log(`Result->${res2}`);
