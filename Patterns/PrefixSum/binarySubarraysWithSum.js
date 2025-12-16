/*
todo: 930. Binary Subarrays With Sum
Medium
Topics
premium lock iconCompanies

Given a binary array nums and an integer goal, return the number of non-empty 
subarrays with a sum goal.

A subarray is a contiguous part of the array.

 

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15

 

Constraints:

    1 <= nums.length <= 3 * 104
    nums[i] is either 0 or 1.
    0 <= goal <= nums.length
*/ 

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let subArrayCount=0;
    let currSum=0;
    let left=0;
    let frequencyMap=new Map()
    for(let right=0;right<nums.length;right++){
        currSum+=nums[right];
        if(currSum===goal){
            subArrayCount++;
        }
        if(frequencyMap.has(currSum-goal)){
            subArrayCount+=frequencyMap.get(currSum-goal)
        }
        frequencyMap.set(currSum,(frequencyMap.get(currSum)||0)+1)
    }
    return subArrayCount;
};