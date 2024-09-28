// variables
const toggle_btn = document.querySelector("#toggle_btn");
const toggle_txt = document.querySelector("#toggle_txt");

// click event
toggle_txt.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (toggle_txt.textContent === "Light") {
    toggle_txt.textContent = "Dark";
    toggle_txt.style.color = "#fff";
    toggle_btn.style.borderColor = "#888a8e";
    toggle_btn.style.backgroundColor = "#888a8e";
  } else {
    toggle_txt.textContent = "Light";
    toggle_txt.style.color = "#1c1e53";
    toggle_btn.style.borderColor = "#fefdff";
    toggle_btn.style.backgroundColor = "#fff";
  }
});

// variables
const toggle_btn_mobile = document.querySelector("#toggle_btn_mobile");
const toggle_txt_mobile = document.querySelector("#toggle_txt_mobile");

// click event
toggle_txt_mobile.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (toggle_txt_mobile.textContent === "Light") {
    toggle_txt_mobile.textContent = "Dark";
    toggle_txt_mobile.style.color = "#fff";
    toggle_btn_mobile.style.borderColor = "#888a8e";
    toggle_btn_mobile.style.backgroundColor = "#888a8e";
  } else {
    toggle_txt_mobile.textContent = "Light";
    toggle_txt_mobile.style.color = "#1c1e53";
    toggle_btn_mobile.style.borderColor = "#fefdff";
    toggle_btn_mobile.style.backgroundColor = "#fff";
  }
});




