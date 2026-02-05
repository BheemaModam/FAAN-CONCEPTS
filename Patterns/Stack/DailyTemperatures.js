/**
 * TODO: 739. Daily Temperatures
Medium
Topics
premium lock icon
Companies
Hint

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.



Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]


Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
 *
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let nextGreater= new Array(temperatures.length).fill(0);
  let stack=[];
  let n=temperatures.length;
  for(let i=0;i<n;i++){
    while(stack.length >0 && temperatures[i]>temperatures[stack.at(-1)]){
      let top=stack.pop();
      nextGreater[top]=i-top;
    }
    stack.push(i)
  }
  return nextGreater;

};
// function dailyTemperatures(temperatures) {
//   // asking for next greater (strict)
//   let stack = [];
//   let nextGreater = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     // next greater (strict) => non-increasing monotonic stack
//     // strict => operator is going to be '<'
//     while (stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
//       let stackTop = stack.pop();
//       // i - stackTop is the number of days to wait
//       nextGreater[stackTop] = i - stackTop;
//     }
//     stack.push(i);
//   }
//   return nextGreater;
// };
const res1 = dailyTemperatures( [73,74,75,71,69,72,76,73]);
const res2 = dailyTemperatures([30,40,50,60]);
const res3 = dailyTemperatures( [30,60,90]);

console.log(`Result->\nres1->${res1},\nres2->${res2},\nres3->${res3}\n`);