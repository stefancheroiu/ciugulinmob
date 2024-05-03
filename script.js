//MAP

let map;

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "8e0a97af9386fef",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

//IN VIEWPORT ANIMATIONS

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 1 && rect.bottom >= 0;
}

function addClassIfInView() {
  var belowHeroBox = document.querySelector(".belowherobox");
  if (isInViewport(belowHeroBox)) {
    belowHeroBox.classList.add("in-view");
  } else {
    belowHeroBox.classList.remove("in-view");
  }

  var serviciiOferite = document.querySelector(".serviciioferite");
  if (isInViewport(serviciiOferite)) {
    serviciiOferite.classList.add("in-view-1");
  } else {
    serviciiOferite.classList.remove("in-view-1");
  }

  var experimentati = document.querySelector(".experimentati");
  var textservicii = document.querySelector(".textservicii");
  var servicii = document.querySelectorAll(".servicesboxone");
  if (isInViewport(experimentati)) {
    experimentati.classList.add("to-right");
    textservicii.classList.add("to-left");
  } else {
    experimentati.classList.remove("to-right");
    textservicii.classList.remove("to-left");
  }
  servicii.forEach(function (servicii) {
    if (isInViewport(experimentati)) {
      servicii.classList.add("in-view-2");
    } else {
      servicii.classList.remove("in-view-2");
    }
  });

  var lottieplayer = document.querySelector(".lottieplayer");
  if (isInViewport(lottieplayer)) {
    lottieplayer.classList.add("to-right-1");
  } else {
    lottieplayer.classList.remove("to-right-1");
  }

  var section3dbox = document.querySelector(".section3dbox");
  if (isInViewport(section3dbox)) {
    section3dbox.classList.add("to-left-1");
  } else {
    section3dbox.classList.remove("to-left-1");
  }

  var testimoniale = document.querySelector(".testimonials");
  if (isInViewport(testimoniale)) {
    testimoniale.classList.add("in-view-3");
  } else {
    testimoniale.classList.remove("in-view-3");
  }
}

window.addEventListener("scroll", function () {
  addClassIfInView();
});

window.addEventListener("DOMContentLoaded", function () {
  addClassIfInView();
});
