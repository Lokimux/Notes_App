function addNote() {
    var noteText = document.getElementById("new-note").value;
    if (noteText.trim() !== "") {
        var noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.textContent = noteText;

        var notesContainer = document.getElementById("notes");
        notesContainer.appendChild(noteElement);

        document.getElementById("new-note").value = "";
    } else {
        alert("Please enter a note!");
    }
}

function clearAllNotes() {
    var notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = "";
}
