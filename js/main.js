// let userImage = document.getElementById("userImage");
// console.log(userImage);

// userImage.onclick = () => (window.location.href = "/profile.html");

// * ------------------

//
let scrollingButton = document.getElementById("scrollBttn");

//
let lineSpans = document.querySelectorAll(
  ".wrapper .yearly-targets .target-row .details .progress .first-span"
);
let numberSpans = document.querySelectorAll(
  ".wrapper .yearly-targets .target-row .details .progress span span"
);

//
let statsSpan = document.querySelectorAll(
  ".wrapper .tickets-stats div.box span"
);
let started = false;

// Increase Stats Numbers Function
function startCount(x) {
  // goal
  let goal = x.dataset.goal; // data-goal="num"
  let count = setInterval(() => {
    x.textContent++;
    if (x.textContent == goal) {
      clearInterval(count);
    }
  }, 1800 / goal);
  // 1800ms => try to fix the increasing
}

// Increase Targets Lines Function
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

// * ----------------------------------------------------------------------------------------
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

  // * INCREASE STATS NUMBERS
  if (window.scrollY >= 300) {
    if (!started) {
      statsSpan.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
    // mea ydar increase ghadi twli started true so not the increasing will not work again
  }

  // * Scrolling Button Function
  scrollingButton.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

// * ----------------------------------------------------------------------------------------

// ? ****************************************************************************************

// * ----------------------------------------------------------------------------------------
// * -------------------- delete tasks

let taskRow = document.querySelectorAll(".wrapper .latest-tasks .task-row");

let iDelete = document.querySelectorAll(
  ".wrapper .latest-tasks .task-row i.delete"
);

for (let index = 0; index < iDelete.length; index++) {
  iDelete[index].onclick = function () {
    taskRow[index].classList.toggle("done");
  };
}

// * ----------------------------------------------------------------------------------------
