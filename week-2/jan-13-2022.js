/* 

AWS LP Behavioral Questions:

1. Tell me about a time when you had to step up and disagree with a team member's approach.

Story Told: Talked about the time while at NCB that I felt that a solution would cause a performance issue because it was implemented in the back end when it should have been implemented in the front-end.

Critique: I don't think this is a very strong story. Can't speak on the actual peformance issue and at the end because I just went with the back-end engineer, it doesn't portray strong AWS qualities outside of have a backbone.


2. How would you handle a project that is expected to be behind schedule

Story Told: Didn't have a particular story to tell but expressed the idea of trying to launch the project on schedule either by narrowing the project's scope or changing the schedule. Made mention of previous experience at NCB to solidify point of narrowing the project's scope.

Critique: I think this was reasonable under the assumption that not having a direct story isn't a penalty in this case. I think the answer was good again under the pervious assumption and shows good experience.


Coding Challenge:

Re-create the map function in JavaScript.

Map takes an iterable and for each item, runs a callback function using the item as a parameter and outputs an array where each element is the output of the callback.

Procedure:

1. Ensure that variable being passed as the array is an array
2. Function validation
  1. Check if variable passed is a function
  2. Check if function outputs a return variable
3. Create output variable that is an empty array
4. Create a loop that starts from 0 and goes to the length of the array
5. For each iteration of the loop, call the callback function is the current array element as a parameter
6. Push the output of the callback into the output array
7. return the output array after the loop

Tests:

recreatedMapFunction([1,2], num => num + 1) = [2,3];
recreatedMapFunction([1,2], num => throw new error) = There was an error in the execution of the callback function: ???;
recreatedMapFunction([], num => num + 1) = [];
recreatedMapFunction(["ball", num => num + 1) = "Please call this function with an array";
recreatedMapFunction([1,2], num => "ball") = "Please call this function with a function variable";
recreatedMapFunction([1,2], num => { const blah = "this is a ball"}) = "Please call this function with a function variable that returns an output that isn't null";

*/

function recreatedMapFunction (passedArray, passedCallback) {
    try {
        testVariableToBeArray(passedArray);
    } catch (err) {
        throw "Please call this function with an array.";
    }

    const isCallbackAFunctionWithParams = testVariableToBeFunction(passedCallback);
    if(!isCallbackAFunctionWithParams) throw "Please call this function with a function variable";

    const outputArray = [];

    for(let i = 0; i < passedArray.length; i++) {
        const currentElement = passedArray[i];
        let outputOfCallback = null;

        try{
            outputOfCallback = passedCallback(currentElement);
        } catch (err) {
            err = `There was an error in the execution of the callback function: ${err}`;
            throw err;
        }

        const isReturnValueNotNull = testIfFunctionReturnsOutput(outputOfCallback);
        if(i === 0 && isReturnValueNotNull) throw "Please call this function with a function variable that returns an output that isn't null";

        outputArray.push(outputOfCallback);
    }

    return outputArray;
}

//Testing utility functions

function testVariableToBeArray (testVariable) {
    return testVariable.length;
}

function testVariableToBeFunction (testVariable) {
    return typeof testVariable === "function";
}

function testIfFunctionReturnsOutput (testVariable) {
    return testVariable === null;
}