//Interaction
// Line 1: Add an event listener to the HTML element with the id "green" and execute a function when it's clicked.
document.getElementById("green").addEventListener("click", function () {
  // Line 2: Change the background color of the HTML element with the id "interactionContainer" to "lightgreen".
  document.getElementById("interactionContainer").style.backgroundColor =
    "lightgreen";
});
// Line 3: Add an event listener to the HTML element with the id "plum" and execute a function when it's clicked.
document.getElementById("plum").addEventListener("click", function () {
  // Line 4: Change the background color of the HTML element with the id "interactionContainer" to "plum".
  document.getElementById("interactionContainer").style.backgroundColor =
    "plum";
});
// Line 5: Add an event listener to the HTML element with the id "blue" and execute a function when it's clicked.
document.getElementById("blue").addEventListener("click", function () {
  // Line 6: Change the background color of the HTML element with the id "interactionContainer" to "lightblue".
  document.getElementById("interactionContainer").style.backgroundColor =
    "lightblue";
});

// Declare a variable 'words' and assign a string value to it
let words = "Use a for loop to add repeating text to this container";
// Use a 'for' loop to iterate twice (step < 2)
for (let step = 0; step < 2; step++) {
  // Inside the loop, create a new paragraph element using the DOM method 'document.createElement'
  let textBox = document.createElement("p");
  // Set the inner HTML content of the paragraph element to the value of the 'words' variable
  textBox.innerHTML = words;
  // Find the HTML element with the id 'loopContainer' using 'document.getElementById'
  // and append (add) the newly created paragraph element as a child to 'loopContainer'
  document.getElementById("loopContainer").appendChild(textBox);
}

//conditionContainer
// Declare a variable 'num' and assign it the value 6.
let num = 6;
// Check if the value of 'num' is equal to 6.
if (num == 6) {
  // If the condition is true, select the HTML element with the id "square"
  // and set its background color property to "red".
  document.getElementById("square").style.backgroundColor = "red";
}

//timeContainer
// Function named "increase" is declared.
function increase() {
  // Retrieve the HTML element with the id "increaseText" from the document.
  const textElement = document.getElementById("increaseText");
  // Get the current font size of the text element, convert it to a floating-point number.
  let fontSize = parseFloat(getComputedStyle(textElement).fontSize);
  // Increase the font size by 1 unit.
  fontSize += 1;
  // Set the font size of the text element to the updated value.
  textElement.style.fontSize = fontSize + "px";
}
// Set up an interval that calls the "increase" function every 1000 milliseconds (1 second).
const interval = setInterval(increase, 1000);

//inputContainer
// Define a function named 'count'
function count() {
  // Get the HTML element with the id "inputText" and assign it to the variable 'inputElement'
  const inputElement = document.getElementById("inputText");
  // Get the HTML element with the id "text-length" and assign it to the variable 'textLengthElement'
  const textLengthElement = document.getElementById("text-length");
  // Get the value of the 'inputElement' and assign it to the variable 'inputValue'
  const inputValue = inputElement.value;
  // Get the length of the 'inputValue' and assign it to the variable 'characterCount'
  const characterCount = inputValue.length;
  // Set the text content of the 'textLengthElement' to display the character count
  textLengthElement.textContent = `Character count: ${characterCount}`;
}
// Add an event listener to the HTML element with the id "form" for the "submit" event
document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Call the 'count' function when the form is submitted
  count();
});

//consoleContainer
console.log("This is a message of my choice.");
