// Function that is called before it is declared later in the file

// Test function hoisting
console.log(addStrings('Hello, ', 'my friend!'));

function addStrings(str1, str2) {
    return str1 + str2;
}

// Show that bye has not been hoisted
console.log(bye())

var bye = function() {
    return 'Bye bye'
};
