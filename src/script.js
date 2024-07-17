const form = document.querySelector("form");
const registrationBtn = document.querySelector("#student-registration");
const detailsBtn = document.querySelector("#student-details");
const submitBtn = document.querySelector("#submit-btn");
const tableContainer = document.getElementById('table-container');
const table = document.getElementById("table").getElementsByTagName("tbody")[0];



tableContainer.style.display = "none";

detailsBtn.addEventListener("click", function() {
    form.style.display = "none";
    detailsBtn.classList.add("underline");
    registrationBtn.classList.remove("underline");
    tableContainer.style.display = "block";
});

registrationBtn.addEventListener("click", function() {
    form.style.display = "flex";
    detailsBtn.classList.remove("underline");
    registrationBtn.classList.add("underline");
    tableContainer.style.display = "none";
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const studentID = document.getElementById('student-id').value;
    const studentClass = document.getElementById('class').value;
    const rollNo = document.getElementById('roll-no').value;
    const contact = document.getElementById('contact-no').value;
    const email = document.getElementById('email').value;

    addStudent(name, gender, studentID, studentClass, rollNo, contact, email);

    form.reset();
});

function addStudent(name, gender, studentID, studentClass, rollNo, contact, email) {
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.innerText = name;
    cell2.innerText = gender;
    cell3.innerText = studentID;
    cell4.innerText = studentClass;
    cell5.innerText = rollNo;
    cell6.innerText = contact;
    cell7.innerText = email;

    // Edit Button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", ()=> editStudent(newRow));

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", ()=> deleteStudent(newRow));

    cell8.appendChild(editButton); 
    cell8.appendChild(deleteButton);

    editButton.style.marginRight = "5px";
}

function editStudent(row) {
    const cells = row.getElementsByTagName('td');
    const name = prompt("Enter new Name", cells[0].innerText);
    const gender = prompt("Enter new gender (Male/Female)", cells[1].innerText);
    const studentID = prompt("Enter new Student ID", cells[2].innerText);
    const studentClass = prompt("Enter new class", cells[3].innerText);
    const rollNo = prompt("Enter new Roll no.", cells[4].innerText);
    const contact = prompt("Enter new Contact", cells[5].innerText);
    const email = prompt("Enter new Email", cells[6].innerText);

    if(name && gender && studentID && studentClass && rollNo && contact && email) {
        cells[0].innerText = name;
        cells[1].innerText = gender;
        cells[2].innerText = studentID;
        cells[3].innerText = studentClass;
        cells[4].innerText = rollNo;
        cells[5].innerText = contact;
        cells[6].innerText = email;
    }
}

function deleteStudent(row) {
    table.deleteRow(row.rowIndex - 1);
}