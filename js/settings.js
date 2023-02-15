// general info (disable email)

let emailInput = document.getElementById("email");
let changeA = document.querySelector(".input-field a");

changeA.onclick = function () {
  emailInput.classList.toggle("disable");
  //
  if (changeA.textContent === "Change") {
    emailInput.removeAttribute("disabled");
    changeA.textContent = "Save";
  } else {
    emailInput.setAttribute("disabled", "");
    changeA.textContent = "Change";
  }
  //
  // local storage
  localStorage.setItem("inputValue", emailInput.value);
};

// to avoid the empty input
if (localStorage.length !== 0) {
  emailInput.value = localStorage.getItem("inputValue");
}
