// Wait for the document to be ready before executing any code
$(document).ready(function () {
  // Attach a click event handler to the element with the ID "colorButton"
  $("#colorButton").click(function () {
    // Generate a random color using the getRandomColor function
    var randomColor = getRandomColor();

    // Change the background color of the body to the randomly generated color
    $("body").css("background-color", randomColor);

    // Update the content of the element with the ID "message"
    $("#message").text("Background color changed!");
  });
});

// Function to generate a random hexadecimal color
function getRandomColor() {
  // Define the possible characters in a hexadecimal color
  var letters = "0123456789ABCDEF";
  var color = "#";

  // Generate a 6-character random color code
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  // Return the generated color code
  return color;
}
