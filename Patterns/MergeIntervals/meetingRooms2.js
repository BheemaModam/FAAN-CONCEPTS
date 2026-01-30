/**
 * TODO: Meeting Rooms II
Difficulty: Medium Accuracy: 48.01% Submissions: 20K+ Points: 4
Given two arrays start[] and end[] such that start[i] is the starting time of ith meeting and end[i] is the ending time of ith meeting. Return the minimum number of rooms required to attend all meetings.

Note: A person can also attend a meeting if it's starting time is same as the previous meeting's ending time.

Examples:
Input: start[] = [1, 10, 7], end[] = [4, 15, 10]
Output: 1
Explanation: Since all the meetings are held at different times, it is possible to attend all the meetings in a single room.

Input: start[] = [2, 9, 6], end[] = [4, 12, 10]
Output: 2
Explanation: 1st and 2nd meetings at one room but for 3rd meeting one another room required.

Constraints:
1 ≤ start.size() = end.size() ≤ 105
0 ≤ start[i] < end[i] ≤ 106
*/
var minMeetingRooms=function(start,  end) {
  let result=0;
  let room=0;
  let i=0;j=0;
  start.sort((a,b)=>a-b);
  end.sort((a,b)=>a-b)
  while(i<start.length && j<end.length){
    if(start[i]<end[j]){
      room++;
      result=Math.max(result,room);
      i++;
    }else {
      room--;
      j++;

    }
  }
  return result;
}

const res1 = minMeetingRooms([1, 10, 7], [4, 15, 10]);
const res2 = minMeetingRooms([2, 9, 6],  [4, 12, 10]);
console.log(`Result->\nres1->${res1},\nres2->${res2},\n`);