//MAP

let map;

async function initMap() {
  const position = { lat: 44.2666656, lng: 23.8999964 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 10,
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
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight / 1 && rect.bottom >= 0;
}

function addClassIfInView() {
  var belowHeroBox = document.querySelector(".belowherobox");
  if (belowHeroBox && isInViewport(belowHeroBox)) {
    belowHeroBox.classList.add("in-view");
  } else if (belowHeroBox) {
    belowHeroBox.classList.remove("in-view");
  }

  var serviciiOferite = document.querySelector(".serviciioferite");
  if (serviciiOferite && isInViewport(serviciiOferite)) {
    serviciiOferite.classList.add("in-view-1");
  } else if (serviciiOferite) {
    serviciiOferite.classList.remove("in-view-1");
  }

  var experimentati = document.querySelector(".experimentati");
  var textservicii = document.querySelector(".textservicii");
  if (experimentati && textservicii && isInViewport(experimentati)) {
    experimentati.classList.add("to-right");
    textservicii.classList.add("to-left");
  } else if (experimentati && textservicii) {
    experimentati.classList.remove("to-right");
    textservicii.classList.remove("to-left");
  }

  var servicii = document.querySelectorAll(".servicesboxone");
  servicii.forEach(function (servicii) {
    if (servicii && isInViewport(servicii)) {
      servicii.classList.add("in-view-2");
    } else if (servicii) {
      servicii.classList.remove("in-view-2");
    }
  });

  var lottieplayer = document.querySelector(".lottieplayer");
  if (lottieplayer && isInViewport(lottieplayer)) {
    lottieplayer.classList.add("to-right-1");
  } else if (lottieplayer) {
    lottieplayer.classList.remove("to-right-1");
  }

  var section3dbox = document.querySelector(".section3dbox");
  if (section3dbox && isInViewport(section3dbox)) {
    section3dbox.classList.add("to-left-1");
  } else if (section3dbox) {
    section3dbox.classList.remove("to-left-1");
  }

  var testimoniale = document.querySelector(".testimonials");
  if (testimoniale && isInViewport(testimoniale)) {
    testimoniale.classList.add("in-view-3");
  } else if (testimoniale) {
    testimoniale.classList.remove("in-view-3");
  }
}

window.addEventListener("scroll", function () {
  addClassIfInView();
});

window.addEventListener("DOMContentLoaded", function () {
  addClassIfInView();
});
