function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 1 && rect.bottom >= 0;
}

function addOpacityAnimation(element) {
  element.classList.add("fadeInOpacity");
}
function deleteOpacityAnimation(element) {
  element.classList.remove("fadeInOpacity");
}
function addClassIfInView() {
  var title = document.querySelector(".titlematerials");
  if (isInViewport(title)) {
    title.classList.add("in-view");
  } else {
    title.classList.remove("in-view");
  }

  const elements = document.querySelectorAll(".material-section, .type");

  elements.forEach((element) => {
    if (isInViewport(element)) {
      addOpacityAnimation(element);
    } else {
      deleteOpacityAnimation(element);
    }
  });
}

window.addEventListener("scroll", function () {
  addClassIfInView();
});

window.addEventListener("DOMContentLoaded", function () {
  addClassIfInView();
});
