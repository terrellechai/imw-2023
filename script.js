function toggleSize() {
  var titles = document.querySelectorAll(".title");
  var subTitles = document.querySelectorAll(".sub-titles");

  // Loop through each title and toggle font size classes
  titles.forEach(function (title) {
    title.classList.toggle("small-title");
  });

  // Loop through each subtitle and toggle visibility
  subTitles.forEach(function (subTitle) {
    subTitle.classList.toggle("show");
  });
}
