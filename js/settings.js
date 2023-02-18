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

// * ----------------------------------------

// social info (change i color while typing)

let socialInfoInputs = document.querySelectorAll(".social-info .box input");
let socialInfoIs = document.querySelectorAll(".social-info .box i");
console.log(socialInfoInputs);

for (let i = 0; i < socialInfoInputs.length; i++) {
  socialInfoInputs[i].onfocus = function () {
    if (socialInfoInputs[i].classList.contains("t")) {
      socialInfoInputs[i].style.color = "#1da1f2";
      socialInfoIs[i].style.color = "#1da1f2";
    } else if (socialInfoInputs[i].classList.contains("y")) {
      socialInfoInputs[i].style.color = "#ff0000";
      socialInfoIs[i].style.color = "#ff0000";
    } else if (socialInfoInputs[i].classList.contains("l")) {
      socialInfoInputs[i].style.color = "#0077b5";
      socialInfoIs[i].style.color = "#0077b5";
    } else {
      socialInfoInputs[i].style.color = "#333";
      socialInfoIs[i].style.color = "#333";
    }
  };
  //
  socialInfoInputs[i].onblur = function () {
    socialInfoIs[i].style.color = "#888";
  };
}
