const form = document.querySelector("form");
const inputElement = document.querySelectorAll("input");
const registrationBtn = document.querySelector("#student-registration");
const detailsBtn = document.querySelector("#student-details");
const submitBtn = document.querySelector("#submit-btn");

detailsBtn.addEventListener("click", function() {
    form.style.display = "none";
    detailsBtn.classList.add("underline");
    registrationBtn.classList.remove("underline");
});

registrationBtn.addEventListener("click", function() {
    form.style.display = "flex";
    detailsBtn.classList.remove("underline");
    registrationBtn.classList.add("underline");
});