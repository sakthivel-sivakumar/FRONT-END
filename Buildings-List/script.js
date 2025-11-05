// =====================
// Section references
// =====================
const homeSection = document.getElementById("home-section");
const listSection = document.getElementById("list-section");
const addSection = document.getElementById("add-section");
const aboutSection = document.getElementById("about-section");

// =====================
// Navigation links
// =====================
const homeLink = document.getElementById("home-link");
const listLink = document.getElementById("list-link");
const addLink = document.getElementById("add-link");
const aboutLink = document.getElementById("about-link");

// =====================
// Building list container
// =====================
const buildingList = document.getElementById("building-list");

// =====================
// Array to store buildings
// =====================
let buildings = [];

// =====================
// Hide all sections
// =====================
function hideAllSections() {
  [homeSection, listSection, addSection, aboutSection].forEach((s) =>
    s.classList.add("hidden")
  );
}

// =====================
// Show a section
// =====================
function showSection(section) {
  hideAllSections();
  section.classList.remove("hidden");
}

// =====================
// Navigation Events
// =====================
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(homeSection);
});

listLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderBuildingList();
  showSection(listSection);
});

addLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(addSection);
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(aboutSection);
});

// =====================
// Add Building Form
// =====================
const addBuildingForm = document.getElementById("add-building-form");

addBuildingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const floors = document.getElementById("floors").value;

  buildings.push({ name, location, floors });

  addBuildingForm.reset();

  renderBuildingList();

  alert("Building added successfully!");
});

// =====================
// Render Building List
// =====================
function renderBuildingList() {
  buildingList.innerHTML = "";

  if (buildings.length === 0) {
    buildingList.innerHTML = "<p>No buildings added yet.</p>";
    return;
  }

  buildings.forEach((b) => {
    const card = document.createElement("div");
    card.className = "building-card";
    card.innerHTML = `
      <h3>${b.name}</h3>
      <p>Location: ${b.location}</p>
      <p>Floors: ${b.floors}</p>
    `;
    card.addEventListener("click", () => {
      alert(
        `Building Details:\nName: ${b.name}\nLocation: ${b.location}\nFloors: ${b.floors}`
      );
    });
    buildingList.appendChild(card);
  });
}

// =====================
// Show Home by default
// =====================
showSection(homeSection);
