// Select buttons and containers
const addBtn = document.getElementById("add-btn");
const allBtn = document.getElementById("all-btn");
const completedBtn = document.getElementById("completed-btn");
const pendingBtn = document.getElementById("pending-btn");

const pendingDiv = document.querySelector("#pending-tasks .task-display");
const completedDiv = document.querySelector("#completed-tasks .task-display");

const taskInput = document.getElementById("input-task-name");

//  Add Task
addBtn.addEventListener("click", (event) => {
    event.preventDefault(); // stop form refresh

    const taskName = taskInput.value.trim();
    if (!taskName) return;

    // Create task div
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <h4>${taskName}</h4>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    // Add to Pending section by default
    pendingDiv.appendChild(task);

    // Clear input
    taskInput.value = "";
});

// Event delegation for Pending section
pendingDiv.addEventListener("click", (e) => {
    const task = e.target.parentElement;

    if (e.target.classList.contains("delete-btn")) {
        task.remove();
    } 
    else if (e.target.classList.contains("complete-btn")) {
        // Move task to Completed section
        completedDiv.appendChild(task);

        // Strike-through the task text
        task.querySelector("h4").style.textDecoration = "line-through";
        task.querySelector("h4").style.color = "gray";

        // Disable the Complete button
        e.target.disabled = true;
        e.target.style.opacity = "0.6"; // optional visual cue
        e.target.style.cursor = "not-allowed";
    }
});

// Event delegation for Completed section (Delete only)
completedDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const task = e.target.parentElement;
        task.remove();
    }
});

//  Filter buttons
allBtn.addEventListener("click", () => {
    pendingDiv.parentElement.style.display = "block";
    completedDiv.parentElement.style.display = "block";
});

pendingBtn.addEventListener("click", () => {
    pendingDiv.parentElement.style.display = "block";
    completedDiv.parentElement.style.display = "none";
});

completedBtn.addEventListener("click", () => {
    pendingDiv.parentElement.style.display = "none";
    completedDiv.parentElement.style.display = "block";
});
