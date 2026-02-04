/***
 *TODO: 496. Next Greater Element I
Easy
Topics
premium lock icon
Companies

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.



Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.


Constraints:

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.


Follow up: Could you find an O(nums1.length + nums2.length) solution?
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
// let result=[];
// let nextGreater=[];
// let stack=[];

// // 1 fill stack & pop
//   for(let i=1;i<nums2.length;i++){
//     while(stack.length>0 && nums2[i]>stack[stack.length-1]){
//       stack.pop()
//     };
//     if(stack.length===0){
//       nextGreater[i]=-1
//     }else{
//       nextGreater[i]=nums2[stack[stack.length-1]]
//     }
//     stack.push(nums2[i])
//   }

//   // 2 loop the nextGreater to newMap;
//   let hash=new Map();
//   for(let i=0;i<nextGreater.length;i++){
//     hash.set(nums2[i],nextGreater[i])
//   }

//   // 3 normalise the result arr with hashmap
//   for(let i=0;i<nums1.length;i++){
//     result[i]=hash.get(nums1[i])
//   }
//   return result;
// };
var nextGreaterElement = function(nums1, nums2) {
    let result = new Array(nums1.length);

    // Step 1: Precompute next greater elements for nums2
    let nextGreater = new Array(nums2.length);
    let stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums2[i] >= nums2[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            nextGreater[i] = -1;
        } else {
            nextGreater[i] = nums2[stack[stack.length - 1]];
        }
        stack.push(i);
    }

    // Step 2: Map nums2 elements to their next greater
    let map = new Map();
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], nextGreater[i]);
    }

    // Step 3: Build result using nums1 and map
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map.get(nums1[i]);
    }

    return result;
};

const res1 = nextGreaterElement([4,1,2], [1,3,4,2]);
const res2 = nextGreaterElement([2,4], [1,2,3,4]);

console.log(`Result->\nres1->${res1},\nres2->${res2},\n\n`);