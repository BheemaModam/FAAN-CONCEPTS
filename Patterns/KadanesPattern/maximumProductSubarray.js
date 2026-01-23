/***
 * TODO: 152. Maximum Product Subarray
Medium
Topics
premium lock icon
Companies
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Note that the product of an array with a single element is the value of that element.



Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxEnding = nums[0];
    let minEnding = nums[0];
    let maxProdTillNow = nums[0];
    if(nums.length===1) return nums[0]
    for (let i = 1; i < nums.length; i++) {

        let v1 = maxEnding * nums[i];
        let v2 = minEnding * nums[i];
        let v3 = nums[i];
        maxEnding = Math.max(Math.max(v1, v2), v3);
        minEnding = Math.min(v3, Math.min(v1, v2))
        maxProdTillNow = Math.max(maxProdTillNow, Math.max(maxEnding, minEnding))
    }
    return maxProdTillNow;
};
const res1=maxProduct([2,-1,1,1])
// const res2=maxProduct([-2,0,-1])
const res2=maxProduct([-2])

console.log(`Result->\n res1=${res1}\n res2=${res2}\n\n`)