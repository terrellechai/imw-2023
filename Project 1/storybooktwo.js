const fish =
  document.getElementById("fish"); /* Get the fish element by its ID */

fish.addEventListener("mouseover", () => {
  fish.style.animationPlayState =
    "paused"; /* Pause fish animation on mouseover */
});

fish.addEventListener("mouseout", () => {
  fish.style.animationPlayState = "running";
});
