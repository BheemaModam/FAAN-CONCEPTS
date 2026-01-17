/**
 * TODO: 209. Minimum Size Subarray Sum
Medium
Topics
premium lock icon
Companies
Given an array of positive integers nums and a positive integer target,
return the minimal length of a subarray whose sum is greater than or equal to target.
If there is no such subarray, return 0 instead.
.


Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104


Follow up: If you have figured out the O(n) solution, try coding another solution
of which the time complexity is O(n log(n)).
 * */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
let minLen=Infinity;
let left=0;
let sum=0;
const n=nums.length;
for(let right=0;right<n;right++){
  sum+=nums[right];
  while(sum>=target){
    const leftChar=nums[left];
    minLen=Math.min(minLen,right-left+1)
    sum=sum-leftChar;
    left++;
  }
}
return minLen===Infinity? 0:minLen;
};
const res1 = minSubArrayLen(7,[2,3,1,2,4,3]);
const res2 = minSubArrayLen(4, [1,4,4]);
const res3 = minSubArrayLen(11, [1,1,1,1,1,1,1,1]);

console.log(`Result->\n${res1},\n${res2}\n${res3}`);