//

let dark = document.getElementById("moon");

let icon = dark.querySelector("i");
dark.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode");

  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
