/**
 *
TODO: 1004. Max Consecutive Ones III
Medium
Topics
premium lock icon
Companies
Hint
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array
if you can flip at most k 0's.



Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
 * */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--;
        }

        if (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++;
        }
    }

    return nums.length - left;
};
const res1 = longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2);
const res2 = longestOnes( [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3);



console.log(`Result->\n${res1},\n${res2},\n`);