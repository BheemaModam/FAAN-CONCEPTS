/***
 * TODO: 1749. Maximum Absolute Sum of Any Subarray
Medium
Topics
premium lock icon
Companies
Hint
You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr]
is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.


Example 1:

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
Example 2:

Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxAbsoluteSum = function (nums) {
//   let maxEnding = nums[0];
//   let minEnding = nums[0];
//   let bestEnding = 0;
//   let result = 0;
//   for (let i = 1; i < nums.length; i++) {
//     maxEnding = Math.max(Math.abs(maxEnding + nums[i]), nums[i]);
//     minEnding = Math.min(Math.abs(minEnding + nums[i]), nums[i]);
//     bestEnding = Math.max(bestEnding, Math.max(maxEnding, minEnding));
//     result = Math.max(result, bestEnding);

//   }
//   return result;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let maxEnding = 0;
    let minEnding = 0;
    let result = 0;
    if (nums.length === 1) return Math.abs(nums[0])
    for (let i = 0; i < nums.length; i++) {
        maxEnding = Math.max(nums[i], maxEnding + nums[i]);
        minEnding = Math.min(nums[i], minEnding + nums[i]);
        result = Math.max(result, (maxEnding), Math.abs(minEnding))
    }
    return result;
};