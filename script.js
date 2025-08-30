const loginBtn = document.getElementsByClassName("btn-login")[0];
const authInputName = document.getElementsByClassName("auth-input-name")[0];
const authBtnSubmit = document.getElementsByClassName("auth-btn-submit")[0];
const authInputConfirmPassword = document.getElementsByClassName(
  "auth-input-confirm-password"
)[0];
const btnSignUp = document.getElementsByClassName("btn-Sign-up")[0];
const authHeading = document.getElementsByClassName("auth-heading")[0];
const authTabSignUp = document.getElementsByClassName("auth-tab-signup")[0];
const authTabLogin = document.getElementsByClassName("auth-tab-login")[0];
const authModel = document.getElementsByClassName("auth-model")[0];
const authModelOverlay =
document.getElementsByClassName("auth-model-overlay")[0];
const authConfirmPasswordEye = document.getElementsByClassName(
  "auth-confirm-password-eye"
)[0];
const authInputPassword = document.getElementsByClassName(
  "auth-input-password"
)[0];
const showPassEye = document.getElementsByClassName("show-pass-eye")[0];
const hidePassEye = document.getElementsByClassName("hide-pass-eye")[0];
const showConPassEye = document.getElementsByClassName("show-con-pass-eye")[0];
const hideConPassEye = document.getElementsByClassName("hide-con-pass-eye")[0];

const backwardArrowBtn =
document.getElementsByClassName("backward-arrow-btn")[0];
const forwardArrowBtn = document.getElementsByClassName("forward-arrow-btn")[0];
const carosalImage = document.getElementsByClassName("carosal-image")[0];



const imagescr = [
  "./public/slider/img-1.jpg",
  "./public/slider/img-2.jpg",
  "./public/slider/img-3.jpg",
];
let activeImgIndex = 0;
carosalImage.src=imagescr[activeImgIndex];
function openLogintab() {
  authHeading.textContent = "Login";
  authTabLogin.classList.add("active-tab");
  authTabSignUp.classList.remove("active-tab");
  authInputName.style.display = "none";
  authConfirmPasswordEye.style.display = "none";
  authBtnSubmit.textContent = "Login";
}
function openSignUptab() {
  authConfirmPasswordEye.style.display = "flex";
  authInputName.style.display = "flex";
  authHeading.textContent = "Sign up";
  authBtnSubmit.textContent = "Register";
  authTabSignUp.classList.add("active-tab");
  authTabLogin.classList.remove("active-tab");
}

function togglePasswordEye() {
  showPassEye.classList.toggle("hide");
  hidePassEye.classList.toggle("hide");
}
function toggleConformPasswordEye() {
  showConPassEye.classList.toggle("hide-confirm");
  hideConPassEye.classList.toggle("hide-confirm");
}

loginBtn.addEventListener("click", () => {
  authModel.style.display = "block";
  openLogintab();
});
btnSignUp.addEventListener("click", () => {
  authModel.style.display = "block";
  openSignUptab();
});
authModelOverlay.addEventListener("click", () => {
  authModel.style.display = "none";
});

showPassEye.addEventListener("click", () => {
  authInputPassword.type = "text";
  togglePasswordEye();
});
hidePassEye.addEventListener("click", () => {
  authInputPassword.type = "password";
  togglePasswordEye();
});

showConPassEye.addEventListener("click", () => {
  authInputConfirmPassword.type = "text";
  toggleConformPasswordEye();
});
hideConPassEye.addEventListener("click", () => {
  authInputConfirmPassword.type = "password";
  toggleConformPasswordEye();
});

authTabLogin.addEventListener("click", openLogintab);
authTabSignUp.addEventListener("click", openSignUptab);

forwardArrowBtn.addEventListener("click", () => {
  activeImgIndex = activeImgIndex + 1;
  const lastIndex = imagescr.length - 1;
  if (activeImgIndex > lastIndex) {
    activeImgIndex = 0;
  }
  carosalImage.src = imagescr[activeImgIndex];
});