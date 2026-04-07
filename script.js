// ------------------------------------------------------->  nav animation and logic
const options = document.querySelectorAll("nav ul li");
let selected = options[0];

function select() {
  if (selected) {
    selected.style.marginLeft = "100px";
  }
  options.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (selected) {
        selected.style.marginLeft = "50px";
      }
      selected = e.currentTarget;
      selected.style.marginLeft = "100px";
    });
  });
}
select();

// ------------------------------------> about me
let showAboutme = false;
const aboutBtn = document.querySelector(".info");
const popup = document.querySelector(".about_me");
const popupCut = document.querySelector(".about_me .cut");
const sense = document.querySelector(".sense");

sense.addEventListener("click", () => {
  popup.style.scale = 0.3;
  popup.style.opacity = 0.0;
  showAboutme = false;
});
popupCut.addEventListener("click", () => {
  showAboutme = false;
  popup.style.scale = 0.3;
  popup.style.opacity = 0.0;
});
aboutBtn.addEventListener("click", () => {
  showAboutme = !showAboutme;
  if (showAboutme) {
    popup.style.scale = 1;
    popup.style.opacity = 1;
  } else {
    popup.style.scale = 0.3;
    popup.style.opacity = 0.0;
  }
});

