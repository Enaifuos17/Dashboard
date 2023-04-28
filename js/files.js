let seeMoreButton = document.querySelector(
  ".files-page .files-stats a.see-more"
);
let uploadButton = document.querySelector(".files-page .files-stats a.upload");
let files = document.querySelectorAll(".files-page .files-stats .main-div");

console.log(seeMoreButton);
console.log(uploadButton);
console.log(files);

seeMoreButton.onclick = function () {
  files[4].style.display = "flex";
  files[5].style.display = "flex";
  seeMoreButton.style.display = "none";
  uploadButton.style.display = "block";
};
