const container = document.getElementById("grid");
const gridSize = 16;

function createGrid() {
  // Clear existing grid
  container.innerHTML = "";

  // Set grid styles
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  // Create grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

// Add hover effect
container.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.classList.add("hovered");
  }
});

// Create initial grid
createGrid();
