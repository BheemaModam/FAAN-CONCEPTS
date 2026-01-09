/*
TODO: Triplets with Smaller Sum
Difficulty: MediumAccuracy: 40.33%Submissions: 104K+Points: 4
Given an array arr[] of distinct integers of size n and a value sum, 
the task is to find the count of triplets (i, j, k), having (i<j<k) 
with the sum of (arr[i] + arr[j] + arr[k]) smaller than the given value sum.


Examples :


Input: n = 4, sum = 2, arr[] = {-2, 0, 1, 3}
Output:  2
Explanation: Below are triplets with sum less than 2 (-2, 0, 1) and (-2, 0, 3). 

Input: n = 5, sum = 12, arr[] = {5, 1, 3, 4, 7}
Output: 4
Explanation: Below are triplets with sum less than 12 (1, 3, 4), (1, 3, 5), (1, 3, 7) and 
(1, 4, 5).
Expected Time Complexity: O(N2).
Expected Auxiliary Space: O(1).

Constraints:
3 ≤ N ≤ 103
-103 ≤ arr[i] ≤ 103

*/ 

var countTriplets=function(n,sum,arr){
    let ans=0;
    for(let i=0;i<arr.length-2;i++){
        let left=i+1;
        let right=arr.length-1;
        while(left<right){
            const closeSum=arr[i]+arr[left]+arr[right];
            if(closeSum>=sum){
                right--;
            }else {
                /*
                FIX: returning only sorted array and asked about the length of array
                */ 
                ans=ans+(right-left); 
                left++;
            }
        }
    }
    return ans;
}
const res1 = countTriplets( 4,  2, [-2, 0, 1, 3]);
const res2 = countTriplets(5, 12, [5, 1, 3, 4, 7]);

console.log(`Result->\n${res1}\n,${res2}`);
