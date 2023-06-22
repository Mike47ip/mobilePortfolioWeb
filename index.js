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



const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);


// const popupsec = document.querySelector('.Secpopupwin');
// section.innerHTML = `<section class="Secpopupwin">
// <div class="containerWin">
//   <div id="popupWindow" class="cardWin">
//     <div id="paddinwindow" class="titleWin">
//       <img
//         class="popupWindowImage"
//         src="/Images/Mobile-popup-Portfolio.JPG"
//         alt="Popup Window Image"
//       />
//       <h2>Keeping track of hundreds of components</h2>
//       <div class="serverdiv">
//         <ul id="serverWin" class="server">
//           <li>Ruby on Rails</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//         </ul>
//       </div>
//       <p class="Lorem">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy
//         text ever since the 1500s, when an unknown printer took a galley
//         of type and scrambled it 1960s. <br />
//         <br />
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy
//         text ever since the 1500s, when an unknown printer took a galley
//         of type and scrambled it 1960s.
//       </p>
//       <div class="buttonDiv">
//         <button class="button" type="button">See live</button>
//         <button class="button" type="button">See source</button>
//       </div>
//     </div>
//   </div>
// </div>
// </section>`;
