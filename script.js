function toggleSize() {
  // Define a function named toggleSize
  var titles = document.querySelectorAll(".title"); // Select all elements with class "title" and store them in the titles variable
  var subTitles = document.querySelectorAll(".sub-titles"); // Select all elements with class "sub-titles" and store them in the subTitles variable

  // Loop through each title and toggle font size classes
  titles.forEach(function (title) {
    // For each title element
    title.classList.toggle("small-title"); // Toggle the "small-title" class
  });

  // Loop through each subtitle and toggle visibility
  subTitles.forEach(function (subTitle) {
    // For each subtitle element
    subTitle.classList.toggle("show"); // Toggle the "show" class
  });
}
