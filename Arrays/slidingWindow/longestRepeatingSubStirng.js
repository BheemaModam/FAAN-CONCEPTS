/*
todo: 424. Longest Repeating Character Replacement
Medium
Topics
premium lock icon
Companies
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const getIndexofChar = (s) => s.charCodeAt(0) - "A".charCodeAt(0);
  let leftPointer = 0;
  let rightPointer = 0;
  let charArr = new Array(26).fill(0);
  let maxFreq = 0;
  for (rightPointer; rightPointer < s.length; rightPointer++) {
    // 1.calucuate MaxFreq
    const currChar = getIndexofChar(s[rightPointer]);
    charArr[currChar]++;

    maxFreq = Math.max(maxFreq, charArr[currChar]);
    // 2.check windowSize and remvoe leftchar
    if (rightPointer - leftPointer + 1 - maxFreq > k) {
      const leftChar = getIndexofChar(s[leftPointer]);
      charArr[leftChar]--;
      leftPointer++;
    }
  }

  return s.length - leftPointer;
};

const res1 = characterReplacement("ABAB", 2);
const res2 = characterReplacement("AABABBA", 1);
console.log(`Result->${res1},${res2}`);
