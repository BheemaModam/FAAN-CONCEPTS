/***
 * TODO: 1186. Maximum Subarray Sum with One Deletion
Medium
Topics
premium lock icon
Companies
Hint
Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements)
with at most one element deletion. In other words, you want to choose a subarray and
optionally delete one element from it so that there is still at least one element left and
the sum of the remaining elements is maximum possible.

Note that the subarray needs to be non-empty after deleting one element.



Example 1:

Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
Example 2:

Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.
Example 3:

Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it,
then get an empty subarray to make the sum equals to 0.


Constraints:

1 <= arr.length <= 105
-104 <= arr[i] <= 104
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
    let noDelete = arr[0];
    let oneDelete = arr[0];
    let bestEnding = arr[0];
    let result = arr[0];

    if(arr.length===1)return arr[0]

    for (let i = 1; i < arr.length; i++) {
        /*

        preNoDelete=noDelete;
        preOneDelete=oneDelete;
        */
        let preNoDelete = noDelete;
        noDelete = Math.max(noDelete + arr[i], arr[i]);
        oneDelete = Math.max(oneDelete + arr[i], preNoDelete)
        result = Math.max(result, noDelete, oneDelete)
    }
    return result;
};