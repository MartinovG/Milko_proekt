const hoverDiv = document.querySelectorAll(".itemholder");
hoverDiv.forEach((div) => {
  div.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    const hiddenText = div.children[2];
    hiddenText.classList.replace("hide", "show");
  });
  div.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    const hiddenText = div.children[2];
    hiddenText.classList.replace("show", "hide");
  });
});