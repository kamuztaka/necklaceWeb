const ImgModal = document.querySelectorAll(".openModal");

ImgModal.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "flex";
  };
});

window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
