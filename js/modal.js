const ImgModal = document.querySelectorAll(".image");

ImgModal.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "grid";
  };
});

const closeBtn = document.querySelectorAll(".close");

closeBtn.forEach(function (btn) {
  btn.onclick = function () {
    const modal = (btn.closest(".modal").style.display = "none");
  };
});

window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};