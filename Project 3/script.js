// Selects the button element with the id "toggleBtn"
const toggleBtn = document.querySelector("#toggleBtn");
// Selects the div element with the class "listHolder"
const divList = document.querySelector(".listHolder");

// Sets the display style of the div element to "none", hiding it initially
divList.style.display = "none";

// Adds a click event listener to the toggle button
toggleBtn.addEventListener("click", () => {
  // Checks if the display style of the div element is "none"
  if (divList.style.display === "none") {
    // Changes the display style to "block" to show the div
    divList.style.display = "block";
    // Changes the innerHTML of the toggle button to "Hide List"
    toggleBtn.innerHTML = "Hide List";
  } else {
    // Changes the display style to "none" to hide the div
    divList.style.display = "none";
    // Changes the innerHTML of the toggle button to "Show List"
    toggleBtn.innerHTML = "Show List";
  }
});

// Selects the input element with the id "addInput"
const addInput = document.querySelector("#addInput");
// Selects the button element with the id "addBtn"
const addBtn = document.querySelector("#addBtn");

// Defines a function to add lists
function addLists() {
  // Checks if the input value is empty
  if (addInput.value === "") {
    // Shows an alert if the input value is empty
    alert("Enter the list name please!!!");
  } else {
    // Selects the ul element within the divList
    const ul = divList.querySelector("ul");
    // Creates a new li element
    const li = document.createElement("li");
    // Sets the innerHTML of the li element to the input value
    li.innerHTML = addInput.value;
    // Clears the input value
    addInput.value = "";
    // Appends the li element to the ul
    ul.appendChild(li);
    // Calls the createBtn function to add a button to the list
    createBtn(li);
  }
}

// Adds a click event listener to the add button
addBtn.addEventListener("click", () => {
  // Calls the addLists function when the add button is clicked
  addLists();
});

// Adds a keyup event listener to the add input
addInput.addEventListener("keyup", (event) => {
  // Checks if the Enter key is pressed (keyCode 13)
  if (event.which === 13) {
    // Calls the addLists function when the Enter key is pressed
    addLists();
  }
});

// Selects the ul element with the class "list"
const listUl = document.querySelector(".list");
// Selects all the children of the ul
const lis = listUl.children;

// Defines a function to create a button and append it to a list item
function createBtn(li) {
  // Creates a button element
  const remove = document.createElement("button");
  // Adds classes "btn-icon" and "remove" to the button
  remove.className = "btn-icon remove";
  // Appends the button to the list item
  li.appendChild(remove);

  // Returns the list item
  return li;
}

// Iterates through each list item and adds a button to it
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}

// Adds a click event listener to the divList
divList.addEventListener("click", (event) => {
  // Checks if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    // Gets the button element
    const button = event.target;
    // Gets the parent list item of the button
    const li = button.parentNode;
    // Gets the parent ul of the list item
    const ul = li.parentNode;
    // Checks if the button has class "remove"
    if (button.className === "btn-icon remove") {
      // Removes the list item from the ul
      ul.removeChild(li);
    }
  }
});
