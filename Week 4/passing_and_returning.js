// CS290 'Passing and Returning Functions' module activity

// Report the sum of all elements in an array of integers
function intArraySum(array) {
    // Loop through the array and add the element to the sum
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}


// Takes in a character's name and then calls the speak function
function dialog(name) {
    return function(words) {
        return speak(name, words)
    }
}

// Quotes the words and adds reference to the speaker
function speak(name, words) {
    return name + ' says: "' + words + '"'
}

var Donkey = { name: "Donkey"};
Donkey.speak = dialog("Donkey")
console.log(Donkey.speak("I'm making waffles!"))