/***
 * TODO:/Smallest sum contiguous subarray
Difficulty: Medium Accuracy: 72.37% Submissions: 31K+ Points: 4 Average Time: 15m
Given an array arr[] of N integers. Find the contiguous sub-array(containing at least one number)
which has the minimum sum and return its sum.

Example 1:

Input:
arr[] = {3,-4, 2,-3,-1, 7,-5}
Output: -6
Explanation: sub-array which has smallest
sum among all the sub-array is {-4,2,-3,-1} = -6
Example 2:

Input:
arr[] = {2, 6, 8, 1, 4}
Output: 1
Explanation: sub-array which has smallest
sum among all the sub-array is {1} = 1
Your Task:
You don't need to read input or print anything. The task is to complete the function smallestSubarraySum()
which takes arr[] and N as input parameters and returns the sum of subarray with minimum sum.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 106
-107 ≤ A[i] ≤ 107
*/
var smallestSumSubarray=function(nums,) {
  let bestEnding=0;
  let minTillNow=0;
  for(let i=0;i<nums.length;i++){
    let v1=bestEnding+nums[i];
    let v2= nums[i]
    bestEnding=Math.min(v1,v2);
    minTillNow=Math.min(minTillNow,bestEnding)
  }
  return minTillNow;
};
const res1=smallestSumSubarray([3,-4, 2,-3,-1, 7,-5])
const res2=smallestSumSubarray([2, 6, 8, 1, 4])
console.log(`Result->\n res1=${res1}\n res2=${res2}\n\n`)