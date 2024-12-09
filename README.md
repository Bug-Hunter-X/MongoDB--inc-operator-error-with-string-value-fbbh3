# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a given value. However, if a string value is provided instead of a number, the operation will fail or produce unexpected results.

The `bug.js` file shows the incorrect usage of the `$inc` operator with a string value. The `bugSolution.js` file provides the correct implementation using a numerical value.

## Bug Description
Incorrect usage of the $inc operator in MongoDB update operations. Using a string instead of a number with $inc leads to unexpected behavior or errors. 

## How to reproduce
1. Clone this repository
2. Run `bug.js` file. You'll get the error 
3. Then run `bugSolution.js`. This will successfully increment the number