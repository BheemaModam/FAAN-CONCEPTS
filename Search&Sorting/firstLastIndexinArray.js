/*
todo: 34. Find First and Last Position of Element in Sorted Array
Medium
Topics
premium lock icon
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and 
ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/ 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   
    const binarySearch=(nums,target,isLeftFound)=>{
 let index=-1;
    let leftPointer=0;
    let rightPointer=nums.length-1;
    
    while(leftPointer<=rightPointer){
        const mid=Math.floor((leftPointer+rightPointer)/2);
        if(nums[mid]>target){
            rightPointer=mid-1;
        }else if(nums[mid]<target){
            leftPointer=mid+1;
        }else {
            index=mid;
            if(isLeftFound){
                rightPointer=mid-1;
            }else{
                leftPointer=mid+1;
            }
        }
    }
    return index;
    };
    const left=binarySearch(nums,target,true)
    const right=binarySearch(nums,target,false);
    return [left,right]
};
  
const res1=searchRange([5,7,7,8,8,10], 8)
const res2=searchRange([5,7,7,8,8,10], 7)
console.log(`Results\n res1->${res1}\n res2->${res2}`);
