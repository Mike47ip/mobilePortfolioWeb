const vector = document.querySelector(".vector");
const popwrap = document.querySelector(".Popwrapper");
const xmenu = document.querySelector(".Xmenu");

vector.addEventListener("click", () => {
  // vector.style.display = "none";
  popwrap.style.left = "0";
});

document.querySelectorAll(".nav-links > li").forEach((sync) =>
  sync.addEventListener("click", () => {
    popwrap.style.left = "100%";
    vector.style.display = "block";
  })
);

xmenu.addEventListener("click", () => {
  popwrap.style.left = "100%";
  vector.style.display = "block";
});
