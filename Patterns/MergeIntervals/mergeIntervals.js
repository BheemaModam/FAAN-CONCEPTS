/***
 * TODO: 56. Merge Intervals
Solved
Medium
Topics
premium lock iconCompanies

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
z
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.



Constraints:

    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104


*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b)=>a[0]-b[0])
let result=intervals[0];
for(let inter of intervals){
  let e1=result[result.length-1][1];
  let s2=inter[0];
  let e2=inter[1];
  if(e1>=s2){
    result[result.length-1][1]=Math.max(e1,e2);

  }else{
    result.push(inter)
  }
}
return result;
};

const res1 = merge([[1,3],[2,6],[8,10],[15,18]]);
const res2 = merge([[1,4],[4,5]]);
const res3 = merge([[4,7],[1,4]]);
console.log(`Result->\nres1->${res1},\nres2->${res2},\nres3->${res3}`);
