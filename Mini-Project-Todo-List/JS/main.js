function addTask () {
    document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");

    const taskText = taskInput.value.trim();
    const dateTxt = dateInput.value.trim();

    // Validasi
    if (taskText === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test (datetext)) {
        alert ("isi sing bener cok");
        return;
    } 
}