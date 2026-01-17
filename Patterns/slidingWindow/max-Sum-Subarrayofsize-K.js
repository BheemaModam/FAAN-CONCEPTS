/**
TODO: Max Sum Subarray of size K

Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.

Note: A subarray is a contiguous part of any given array.

Examples:

Input: arr[] = [100, 200, 300, 400], k = 2
Output: 700
Explanation: arr2 + arr3 = 700, which is maximum.

Input: arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
Output: 39
Explanation: arr1 + arr2 + arr3 + arr4 = 39, which is maximum.

Input: arr[] = [100, 200, 300, 400], k = 1
Output: 400
Explanation: arr3 = 400, which is maximum.

Constraints:
1 ≤ arr.size() ≤ 106
1 ≤ arr[i] ≤ 106
1 ≤ k ≤ arr.size()

*

*!my attempt
*/
var maxSubArray=function(array,k){
  let result=0;
  let left=0;
  let sum=0;

  for( let right=0;right<array.length;right++){

     sum=sum+array[right];

    // removing leftChar
     while(right-left+1>k){
      const leftChar=array[left];
      sum=sum-leftChar;
      result=Math.max(result,sum)
      left++;
     }
  }
  return result;
}

// var maxSubArray=function(array,k){
//   let left=0
//   let windowSum=0;
//   // sum of firstWindow
//   for(let i=0;i<k;i++){
//     windowSum+=array[i]
//   };
//   let maxSum=windowSum;
//   // sliding window 1 by 1
//   for(let i=k;i<array.length;i++){
//     windowSum+=array[i]-array[i-k];
//     maxSum=Math.max(maxSum,windowSum)
//   }


//   return maxSum;
// }
const res1 = maxSubArray([100, 200, 300, 400], 2);
const res2 = maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
const res3 = maxSubArray([100, 200, 300, 400], 1);

console.log(`Result->\n${res1},\n${res2}\n${res3}`);