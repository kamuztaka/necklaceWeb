const click = document.querySelector(".fa-bars");
const menuContainer = document.querySelector("#menuContainer");

click.addEventListener("click", () => {
  if (menuContainer.classList.contains("show")) {
    menuContainer.classList.remove("show");
    menuContainer.classList.add("hide");
  } else {
    menuContainer.classList.remove("hide");
    menuContainer.classList.add("show");
  }
});
