// Example functions
function checkCondition1(t, i) {
    return t > 0 && i < 10;
}

function checkCondition2(t, i) {
    return t < 0 || i > 5;
}

// Using the conditional function
const condition = true; // Change to false to see different behavior
const combinedFunction = condition ? (t, i) => checkCondition1(t, i) && checkCondition2(t, i) : checkCondition2;

// Usage example:
console.log(combinedFunction(1, 3)); // Output: true (if condition is true)
