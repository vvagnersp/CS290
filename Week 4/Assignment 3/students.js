// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
    this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
    this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
    this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
    this.club = club; // string, (e.g. "Improv", "Art")
  }

/* logMe function - Displays the student object to the console in the format 
(Name - Major - Year - Club). Takes the boolean parameter 'displayClub'
and will not print that property if False */
Student.prototype.logMe = function(displayClub) {
    // Format the properties according to function description 
    resStr = this.name + ' - ' + this.major + ' - ' + this.yearInSchool;
    // Add the club property to the printed string if requested
    if (displayClub) {
        resStr += ' - ' + this.club;
    }
    console.log(resStr);
}

var students = [
    new Student("Pam", "Art", 2, "Art"),
    new Student("Michael", "Business", 4, "Improv"),
    new Student("Dwight", "Horticulture", 1, "Karate"),
    new Student("Jim", "Sports Science", 2, "Guitar"),
    new Student("Angela", "Accounting", 4, "Cat"),
    new Student("Toby", "Human Resources", 3, "Photography")
];
  
/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
    // Copy input array for result and sort via insertion sort
    res = array.slice();
    for (var i = 1; i < res.length; i++) {
        /* Grab the content in the ith element of the array and create another
           variable for tracking the index one element left of i */
        var current = res[i]
        var j = i - 1
        // Sorting algorithm
        while ((j > -1) && !(comparator(res[j], current))) {
            res[j + 1] = res[j];
            j--;
        }
        res[j + 1] = current; 
    }
    return res;
}

/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}
  
/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
    // Compares the strict numerical value of the year
    if (student1.yearInSchool > student2.yearInSchool){
        return true;
    } else {
        return false;
    }
}
  
/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
    // Converts the student major properties lowercase to make case insensitive then compares
    if (student1.major.toLowerCase() < student2.major.toLowerCase()){
        return true;
    } else {
        return false;
    }
}
  
/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
    // Map each club to an integer to designate their ordering (1 = greatest, 4 = least)
    var clubMap = {
        Improv: 1,
        Cat: 2,
        Art: 3,
        Guitar: 4
    };
    // If the clubs are the same, compare years
    if (student1.club == student2.club) {
        return yearComparator(student1, student2)
    }
    /* Check if the club is assigned a value in the array to avoid trying to
       access a value that does not exist */
    if (!(student1.club in clubMap) || !(student2.club in clubMap)) {
        if (student1.club in clubMap) {
            return true;
        } else {
            return yearComparator(student1, student2);
        }
    }
    // If both clubs are assigned a value make comparison
    else if (clubMap[student1.club] < clubMap[student2.club]) {
        return true;
    } else {
        return false;
    }
}

/********************  
DISPLAY RESULTS 
********************/

// Display results of the sorting algorithm passed
function displayResults(blurb, comparator, array, showClub) {
    console.log('**********');
    console.log(blurb);

    /* Store the result of the passed comparison/sorting algorithm
    and display each student in order to the console */
    var sorted = sortArr(comparator, array);
    for (var i = 0; i < array.length; i++) {
        sorted[i].logMe(showClub);
    }
    
    console.log('**********');
    console.log();
}

// Display the students sorted by year in school
displayResults('The students sorted by year in school are:', 
                yearComparator, students, false);

// Display the students sorted by major
displayResults('The students sorted by major are:', 
                majorComparator, students, false);

// Display students sorted by club affiliation
displayResults('The students sorted by club affiliation are:', 
                clubComparator, students, true);
