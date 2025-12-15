/*
todo: 560. Subarray Sum Equals K
Solved
Medium
Topics
premium lock iconCompanies
Hint

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

 

Constraints:

    1 <= nums.length <= 2 * 104
    -1000 <= nums[i] <= 1000
    -107 <= k <= 107


*/ 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count=0;
    let sum=0;
    let hashTable=new Map();
    hashTable.set(0,1) //--> element and its frequency
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        const target=sum-k;
        if(hashTable.get(target)){
            count+=hashTable.get(target)
        }
        hashTable.set(sum,(hashTable.get(sum)||0)+1)
    }
    return count;




};