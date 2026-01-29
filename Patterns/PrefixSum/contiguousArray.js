/***
 *TODO: 525. Contiguous Array
Medium
Topics
premium lock icon
Companies
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.



Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let ones = 0;
    let zeros = 0;
    let result = 0;
    let map = new Map();
    map.set(0, -1);//-> default -1 index difference 0;
// 1.save index as value of difference in Hashmap

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) ones++;
        if (nums[i] === 0) zeros++;
        const diff = ones - zeros;
        if (diff === 0) {
            result = Math.max(result, i + 1);

        }
        if (map.has(diff)) {
            let index = map.get(diff);
            let len = i - index;
            result = Math.max(result, len)
        }
        else {
            map.set(diff, i)
        }
    }
    return result;
};
