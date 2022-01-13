/* 

Amazon LP Behavorial Questions:

1. If your direct manager was instructing you to do something you disagreed with, how would you handle it?

Story Told: Told about the time at Ingenuity when I disagreed with the ways of working being implemented, brought up my disagreement during a meeting and how there was some positive change because of the discussion.

Critique: Was a good story choice. Could have talked about the agile process more, what we did and why I disagreed with it.


2. Tell me about a time you exceeded your expectations

Story Told: Told story about the time I joined NCB with very little React/Redux and Material UI knowledge and was able to upskill myself to being an extremely productive member of the team within 3 months.

Critique: Great story choice. Was somewhat detailed about the technologies used and what I had to learn. Talked about a significant win I had which would make for interesting follow up questions. Pretty good overall!


Coding Challenge:

153. Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time. 


Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.


Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.


Example 3:

Input: nums = [18,11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.


What we know:
Array is sorted - Binary Search
Array can be rotated - rotation is to the right

Possible solutions:
Find point where n > n + 1 O(n) (doesn't meet O(log n) constraint)
Need to adapt Binary Search

Solution: Implement Binary Search where we check if the middle value is less than the value at the end of the selected segment

*/