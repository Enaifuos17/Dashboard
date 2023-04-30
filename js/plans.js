let joinButtons = document.querySelectorAll(".plans-page .plan a");
let pCurrentPlan = document.querySelectorAll(
  ".plans-page .plan p.current-plan"
);

console.log(joinButtons);
console.log(joinButtons[0]);

console.log(pCurrentPlan);

// green
joinButtons[0].onclick = function () {
  joinButtons[0].style.display = "none";
  pCurrentPlan[0].style.display = "block";
  joinButtons[1].style.display = "block";
  pCurrentPlan[1].style.display = "none";
  joinButtons[2].style.display = "block";
  pCurrentPlan[2].style.display = "none";
};

// blue
joinButtons[1].onclick = function () {
  joinButtons[0].style.display = "block";
  pCurrentPlan[0].style.display = "none";
  joinButtons[1].style.display = "none";
  pCurrentPlan[1].style.display = "block";
  joinButtons[2].style.display = "block";
  pCurrentPlan[2].style.display = "none";
};

// orange
joinButtons[2].onclick = function () {
  joinButtons[0].style.display = "block";
  pCurrentPlan[0].style.display = "none";
  joinButtons[1].style.display = "block";
  pCurrentPlan[1].style.display = "none";
  joinButtons[2].style.display = "none";
  pCurrentPlan[2].style.display = "block";
};
