const signup = document.querySelector(".form-signup a");
const signin = document.querySelector(".form-signin a");

signin.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".signin").style.display = "block";
  document.querySelector(".signup").style.display = "none";
});
signup.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".signin").style.display = "none";
  document.querySelector(".signup").style.display = "block";
});
