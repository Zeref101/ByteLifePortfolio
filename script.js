const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// ==============NAVBAR HIDE SCROLL=================

let prevScrollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollpos = window.scrollY;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    const condition = dropDownMenu.classList.contains("open");
    if (condition) {
      dropDownMenu.classList.toggle("open");
      toggleBtnIcon.classList = condition
        ? "fa-solid fa-bars"
        : "fa-solid fa-xmark";
    }
    document.querySelector(".navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollpos;
};
// ==================================================
const changingName = document.querySelector(".change-service");
const features = [
  "Social Media Content",
  "Podcasting",
  "App Development Services",
  "Informative Content",
];
let i = 0;

const featureName = (array, num) => {
  return array[num];
};

setInterval(() => {
  changingName.classList.add("changingName-hidden");
  setTimeout(() => {
    changingName.classList.remove("changingName-hidden");
    if (i === 4) {
      i = 0;
    }
    const nextName = featureName(features, i);
    changingName.textContent = nextName;
    i++;
  }, 800);
}, 1500);
//   ===========================================================
