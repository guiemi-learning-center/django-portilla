// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name) {
    roster.push(name);
    return name;
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(name) {
    var index = roster.indexOf(name);
    roster.splice(index, 1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
    return console.log(roster);
}

// Start by asking if they want to use the web app

var question = prompt("Would you like to start the roster web app? (y/n)")

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

if (question[0] === "n") {
    alert("Thank u")
} else {
    while (true) {
        var question = prompt("Please choose an action: add, remove, display or quit")

        if (question[0] === "a") {
            var name = prompt("Write a name:")
            addNew(name);
        } else if (question[0] === "r") {
            var remove_name = prompt("Which name do you want to remove?")
            remove(remove_name);
        } else if (question[0] === "d") {
            display();
        } else if (question[0] === "q") {
            alert("Namárië!")
            break;
        }
    }
}