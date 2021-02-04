function initialize() {
  let element = document.getElementsByClassName("first-block-content")?.[0];
  element.classList.add("hide");
  element = document.getElementsByClassName("second-block-content")?.[0];
  element.classList.add("hide");
}

function toggleShowSecondBlock() {
  let element = document.getElementById("second-block-content");
  toggleHide(element);
}

function toggleShowFirstBlock() {
  let element = document.getElementById("first-block-content");
  toggleHide(element);
}

function toggleHide(element) {
  if (element?.className) {
    if (element.className.includes("hide")) {
      element.classList.remove("hide");
      element.classList.add("show");
    } else {
      element.classList.remove("show");
      element.classList.add("hide");
    }
  }
}
