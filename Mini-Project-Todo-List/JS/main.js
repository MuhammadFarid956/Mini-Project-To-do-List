function addTask() {
  document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  const taskText = taskInput.value.trim();
  const dateTxt = dateInput.value.trim();

  // Validasi
  if (taskText === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(datetext)) {
    alert("isi sing bener cok");
    return;
  }
}

// Filter Tasks
function toggleFilter() {
  const dropbtn = document.getElementById("dropdownContent");
  dropbtn.style.display = dropbtn.style.display === "none" ? "block" : "none";
}

// function filterTasks ( ) {
//     const filterValue = document.getElementById("filterSelect").value;
//     const tasks = document.querySelectorAll(".task");

//     tasks.forEach(task => {
//         const isCompleted = task.classList.contains("completed");
//         if (filterValue === "all" || (filterValue === "completed" && isCompleted) || (filterValue === "pending" && !isCompleted)) {
//             task.style.display = "inline";
//         } else {
//             task.style.display = "none";
//         }
//     });
// }
