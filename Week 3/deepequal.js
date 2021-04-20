// JS Objects Activity: deepEqual - compares two things that are passed in

// Compares to items and searches for exact parity if the two items are objects
function deepEqual(item1, item2) {
    // Capture strings, numbers, null, undefined, and 
    // objects pointing to same memory space
    if (item1 == item2) {
        return true;
    }
    // Check for objects
    else if (typeof(item1) == 'object' && typeof(item2) == 'object') {
        // Check that one of the items in not null
        if (item1 == null || item2 == null) {
            return false;
        }
        // Check that the object lengths are the same
        var keys1 = Object.keys(item1)
        var keys2 = Object.keys(item2)
        if (keys1.length != keys2.length) {
                return false
            }
        // Compare the keys at an index to the key at another index and the values
        // at those indices with each other
        for (var i = 0; i < keys1.length; i++) {
            if (keys1[i] != keys2[i] || !deepEqual(item1[keys1[i]], item2[keys2[i]])) {
                return false;
            }
        }
        // Every key-value pair matches
        return true;
    }
}


// Test code
let obj = {here: {is: "an", haha: "poo"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", haha: "poo"}, object: 2}));
// → true
