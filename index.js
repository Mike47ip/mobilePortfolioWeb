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

//Mobile Version of Popup Window

var projectsMobile = [
  {
    id: "card1",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
  {
    id: "card2",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
  {
    id: "card3",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
  {
    id: "card4",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
  {
    id: "card5",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
  {
    id: "card6",
    heading: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "CSS", "JavaScript", "HTML"],
    button: "See Project",
  },
];

projectsMobile.forEach((mobileProjects) => {
  const projects = document.querySelector(".container");

  const cardyB = document.createElement("div");
  cardyB.classList.add("card");

  const cardyC = document.createElement("div");
  cardyC.classList.add("title");

  cardyB.appendChild(cardyC);

  const cardhead = document.createElement("h2");
  cardhead.classList.add("text");
  cardhead.innerText = mobileProjects.heading;

  cardyC.appendChild(cardhead);

  const tech = document.createElement("ul");
  tech.classList.add("server");

  mobileProjects.technologies.forEach((techtrans) => {
    const li = document.createElement("li");
    li.innerHTML = techtrans;
    tech.appendChild(li);
  });

  cardyC.appendChild(tech);
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = mobileProjects.button;

  cardyC.appendChild(btn);

  projects.appendChild(cardyB);
});
