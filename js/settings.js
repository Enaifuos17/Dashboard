// general info (disable email)

let emailInput = document.getElementById("email");
let changeA = document.querySelector(".input-field a");

changeA.onclick = function () {
  emailInput.classList.toggle("disable");
  //
  if (changeA.textContent === "Change") {
    emailInput.removeAttribute("disable");
    changeA.textContent = "Save";
  } else {
    emailInput.setAttribute("disabled", "");
    changeA.textContent = "Change";
  }
};
