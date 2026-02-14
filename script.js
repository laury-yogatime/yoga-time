const toggle = document.getElementById("bottom-nav-toggle");
const label = toggle.querySelector(".bottom-nav-label");
const menu = document.getElementById("bottom-nav-menu");
const sections = document.querySelectorAll("section[id]");

function updateToggleLabel() {
  let current = null;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
      current = section;
    }
  }

  if (current) {
    label.textContent = current.querySelector("h2").textContent;
  } else {
    label.textContent = "yo:ga time";
  }
}

updateToggleLabel();
window.addEventListener("scroll", updateToggleLabel);

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".bottom-nav")) {
    menu.classList.remove("open");
  }
});
