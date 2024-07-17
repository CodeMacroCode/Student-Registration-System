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

    cell1.innerText = name;
    cell2.innerText = gender;
    cell3.innerText = studentID;
    cell4.innerText = studentClass;
    cell5.innerText = rollNo;
    cell6.innerText = contact;
    cell7.innerText = email;
}