/**
 * TODO:Longest Substring with K Uniques
Difficulty: Medium Accuracy: 34.65% Submissions: 256K+ Points: 4
You are given a string s consisting only lowercase alphabets and an integer k.
Your task is to find the length of the longest substring that contains exactly k distinct characters.

Note : If no such substring exists, return -1.

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe",
which includes 'c', 'b', and 'e'.

Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.

Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b',
making it the longest valid substring.

Constraints:
1 ≤ s.size() ≤ 105
1 ≤ k ≤ 26
 * */
var longestKSubstr = function (s, k) {
  let longestSub = -1;
  let left = 0;
  let hashUnique = new Map();
  let uniqueChar = 0
  for (let right = 0; right < s.length; right++) {
    const curr = s.charAt(right)
    hashUnique.set(curr, (hashUnique.get(curr) || 0) + 1);
    uniqueChar = hashUnique.size
    while (uniqueChar > k) {
      const leftChar = s.charAt(left);
      hashUnique.set(leftChar, (hashUnique.get(leftChar)) - 1);
      if (hashUnique.get(leftChar) === 0) {
        hashUnique.delete(leftChar);
      }
      left++;
    }
    if(uniqueChar===k){
      longestSub = Math.max(longestSub, right - left + 1)
      console.log(`longestSub->${longestSub}`)
    }
  }
  return longestSub;
}
const res1 = longestKSubstr("aabacbebebe", 3);
const res2 = longestKSubstr("aaaa", 2);
const res3 = longestKSubstr("aabaaab", 2);


console.log(`Result->\n${res1},\n${res2},\n${res3}`);