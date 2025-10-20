/*
todo:3707. Equal Score Substrings

You are given a string s consisting of lowercase English letters.
The score of a string is the sum of the positions of its characters in the alphabet, 
where 'a' = 1, 'b' = 2, ..., 'z' = 26.
Determine whether there exists an index i such that the string can be split into two non-empty
s[0..i] and s[(i + 1)..(n - 1)] that have equal scores.
Return true if such a split exists, otherwise return false.
 

Example 1:
Input: s = "adcb"
Output: true
Explanation:
Split at index i = 1:
Left substring = s[0..1] = "ad" with score = 1 + 4 = 5
Right substring = s[2..3] = "cb" with score = 3 + 2 = 5
Both substrings have equal scores, so the output is true.

Example 2:
Input: s = "bace"
Output: false
Explanation:​​​​​​
​​​​​​No split produces equal scores, so the output is false.

 Constraints:
2 <= s.length <= 100
s consists of lowercase English letters.

*/

/**
 * @param {string} s
 * @return {boolean}
 

var scoreBalance = function (s) {
  alphaNumbers = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", 5],
    ["f", 6],
    ["g", 7],
    ["h", 8],
    ["i", 9],
    ["j", 10],
    ["k", 11],
    ["l", 12],
    ["m", 13],
    ["n", 14],
    ["o", 15],
    ["p", 16],
    ["q", 17],
    ["r", 18],
    ["s", 19],
    ["t", 20],
    ["u", 21],
    ["v", 22],
    ["w", 23],
    ["x", 24],
    ["y", 25],
    ["z", 26],
  ]);
  let leftSum = 0;
  rightSum = 0;
  let midpoint =
    s.length % 2 === 0
      ? Math.floor(s.length / 2)
      : Math.floor(s.length / 2 + 1);

  let left = 0;
  let right = midpoint;
  while (midpoint >= left && right <= s.length - 1) {
    console.log(
      `Lefstirng->${alphaNumbers.get(s[left])},RightStrig->${alphaNumbers.get(
        s[right]
      )}`
    );

    leftSum += alphaNumbers.get(s[left]);
    rightSum += alphaNumbers.get(s[right]);
    left++;
    right++;
  }
  console.log(`Leftum->${leftSum},Right->${rightSum}`);

  return leftSum === rightSum ? true : false;
};
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function (s) {

};
const res1 = scoreBalance("rps");
console.log(`Result->${res1}`);

const res2 = scoreBalance("bace");
console.log(`Result->${res2}`);
const res3 = scoreBalance("abdcd");
console.log(`Result->${res3}`);
