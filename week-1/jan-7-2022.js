/* 
Amazon Behavioral Questions:
What is the most challenging situation you have ever faced in your life? How did you handle it?
Told story of joining NCB team with minimal skills and upskilling to be valuable on that team. Could have said more about the results of my efforts and some of the key things I did.

Tell me about a time when you couldn’t meet your own expectations on a project.
Talked about the time when I was working on a freelance project and couldn't implement parrallaxing on the site. Talked about the detriment from that experience, what I learned and what I would have done differently.

Leetcode question:
Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

solution 1: traverse and save all elements in list, create new list with elements in reverse O(n)/O(n)
solution 2: Reverse list in place by changing where the nodes point. O(1)/O(n)

tasks:
if head.next is null or head is null, return head
create prev, set it to null
*pattern
create temp and put currentnode.next into temp
set currentnode.next to prev
set prev to current node
set currentnode to temp
*pattern*
loop through pattern to reverse list
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    
    let previousNode = null;
    let currentNode = head;

    while(currentNode) {
        let temp = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = temp;
    }

    return previousNode;
};

//reverseList([1,2,3,4,5]) = [5,4,3,2,1];