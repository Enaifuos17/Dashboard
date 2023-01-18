let userImage = document.getElementById("userImage");
// console.log(userImage);

// userImage.onclick = () => (window.location.href = "/profile.html");

// * ------------------

let scrollingButton = document.getElementById("scrollBttn");

let lineSpans = document.querySelectorAll(
  ".wrapper .yearly-targets .target-row .details .progress .first-span"
);

let numberSpans = document.querySelectorAll(
  ".wrapper .yearly-targets .target-row .details .progress span span"
);

function increaseTargets() {
  for (let i = 0; i < lineSpans.length; i++) {
    // line loop
    if (lineSpans[i].classList.contains("blue")) {
      lineSpans[i].style.width = "80%";
    } else if (lineSpans[i].classList.contains("orange")) {
      lineSpans[i].style.width = "55%";
    } else {
      lineSpans[i].style.width = "75%";
    }
  }
  // number loop
  for (let i = 0; i < numberSpans.length; i++) {
    numberSpans[i].style.display = "block";
  }
}

// * onscroll

window.onscroll = function () {
  // * INCREASE TARGETS
  if (this.scrollY >= 300) {
    increaseTargets();
  }

  // * SCROLLING BUTTON
  if (this.scrollY >= 600) {
    scrollingButton.classList.add("show");
  } else {
    scrollingButton.classList.remove("show");
  }
};
