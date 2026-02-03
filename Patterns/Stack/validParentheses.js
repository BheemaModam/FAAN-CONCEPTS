/***
 * TODO: 20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
*
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let brackets=[];
    for(let i=0;i<s.length;i++){
       if(s[i]=='{'){
                brackets.push('}');
        }else if(s[i]=='['){
                brackets.push(']');
        }else if(s[i]=='('){
                brackets.push(')');
       }else if(brackets.pop() !== s[i]){
                return false;
            }

    }
    return !brackets.length;
}
const res1 = isValid( "()");
const res2 = isValid("()[]{}");
const res3 = isValid( "(]");
const res4 = isValid("([])");
const res5 = isValid("([)]");

console.log(`Result->\nres1->${res1},\nres2->${res2},\nres3->${res3}\nres4->${res4}\nres5->${res5}`);