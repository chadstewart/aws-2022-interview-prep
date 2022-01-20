/* AWS LP Behavorial Questions:

1. Tell me about a time when you invented something.

Story Told: Told the story of TechIsHiring starting and it's pivot from being an application powered by Twitter to being a community.

Critique:


2. Describe the most challenging project you've worked on so far

Story Told: Told the story of making the NSU Grad School Internship Portal and the issues that came about from working with the group.

Critique:


JavaScript/Front-End Trivia Questions:

JavaScript
1. How do you determine if an object is sealed or not - Have no clue what an object being sealed is.

2. What are primitive data types - Data Types that hold simple data, i.e. strings, numbers, booleans, null (didn't even know null was a data type).

Front-End
1. Can you describe the difference between progressive enhancement and graceful degradation? - I have no clue honestly

2. If you could master one technology this year, what would it be? If I could do two, it would be NodeJS and TypeScript but if I had to choose one it'd be NodeJS.


Coding Challenge:

Return the nth largest number from a Binary Search Tree where 0 < n < 1000.


Procedure:

1. Write a depth-first traversal algorithm that goes down the right side of the BST.
2. Modify a DFT function to output an array of values in the order the DFT function finds them.
3. Output the nth value or range too large.


 */

function nthLargestValueInBST (node, target) {
    target -= 1;
    let resultingArray;

    resultingArray = customDFT(node);

    isLessThanNumberOfNodes = n < resultingArray.length;

    if(isLessThanNumberOfNodes){
        return resultingArray[target];
    } else throw "the number passed is larger than the amount of nodes";
}

function customDFT(node, nodeValues = []) {
    if(!node) return null;

    customDFT(node.right, nodeValues);
    nodeValues.push(node.value);
    customDFT(node.left, nodeValues);

    return nodeValues;
}

nthLargestValueInBST(head, 3);