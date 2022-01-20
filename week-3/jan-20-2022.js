/* 

AWS LP Behavorial Questions:

1. When you’re working with a large number of customers, it’s tricky to deliver excellent service to them all. So how do you go about prioritizing your customers’ needs?

Story Told: Told story on how NCB handled and prioritized customer needs.

Critique:


2. Describe a project that you are particularly proud of. How did it impact your company? What challenges did you encounter and how did you solve them?

Story Told: Told story about when I worked on important BOJ changes to the application at NCB. Delivered the project and was a strong self-confidence booster that I could deliver features on my own.

Critique:


JavaScript/Front-End Trivia Questions:

JavaScript
1.

2.

Front-End
1.

2.


Coding Challenge:

Take a BST and count the amount of levels in the BST.

Procedure:

1. Write a breadth-first traversal algorithm.
2. Modify BFT to add the head first and then a special character
3. Whenever special character is hit, raise a count and read the character

*/

function countBSTLevels (head) {
    const traversalQueue = [head, "*"];
    let count = 0;
    
    while(traversalQueue.length > 0) {
        let currentNode = traversalQueue.shift();
        const isSpecialCharacter = currentNode === "*";

        if(isSpecialCharacter) {
            count++;
            if(traversalQueue.length > 0) traversalQueue.push("*");
            continue;
        }

        if(currentNode.left) traversalQueue.push(currentNode.left);
        if(currentNode.right) traversalQueue.push(currentNode.right);
    }

    return count;
}