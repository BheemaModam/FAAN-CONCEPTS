/*
todo: 128. Longest Consecutive Sequence
Medium

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

 
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
Input: nums = [1,0,1,2]
Output: 3
 

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   let resultArray = [];
//   for (let i = 0; i <= nums.length; i++) {
//     let currentCount = nums[i];

//     console.log(`current->${nums[i]}`);
//     for (let j = 0; j <= nums.length; j++) {
//       let longCount = 0;

//       if (nums[j] === currentCount + 1) {
//         console.log(`Sequencec->${nums[j]}`);
//         longCount + 1;
//         currentCount = nums[j];
//         resultArray.push(longCount);
//         console.log(`Count->${longCount}`);
//       }
//     }
//   }
//   console.log(`result->${resultArray}`);
//   return Math.max(...resultArray);
// };
var longestConsecutive = function (nums) {
  let resultArray = [];
  let hashSet = new Set(nums);
  let longCount = 0;
  for (const num of hashSet) {
    if (!hashSet.has(num - 1)) {
      let length = 1;
      let nextNum = num + 1;
      while (hashSet.has(nextNum)) {
        longCount++;
        length++;
        nextNum++;
      }
      longCount = Math.max(longCount, length);
    }
  }
  return longCount;
};

const res1 = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
console.log(`Result->${res1}`);
const res2 = longestConsecutive([1, 0, 1, 2]);
console.log(`Result->${res2}`);
const res3 = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(`Result->${res3}`);
/*
todo: main Points

*/
