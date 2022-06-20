const phone = document.getElementById("phone");
const password = document.getElementById("password");
let passwordValue = '';
const confirmPassword = document.getElementById("confirmPassword");
const contentWrapper = document.querySelector('.main');
const leftSideOne = document.querySelector('.left');
const signIn = document.querySelector(".signIn");
const leftSideTwo = document.querySelector('.left2');
const rightSideOne = document.querySelector('.right');
const rightSideTwo = document.querySelector('.right2');
const signUp = document.querySelector('.signUp2');

phone.addEventListener('keyup', function() {
  let phoneValue = '';
  phoneValue = phone.value;
  if (/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneValue)) {
    phone.setCustomValidity("");
  } else {
    phone.setCustomValidity("please type a 10 digit number Ex.000-000-0000");
  }
})

password.addEventListener('keyup', function() {
passwordValue = password.value;
if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(passwordValue)) {
  password.setCustomValidity("");
} else {
  password.setCustomValidity("password must be 8 characters long and include atleast 1Uppercase, 1lowercase, and 1 number");
}
});

confirmPassword.addEventListener('keyup', function() {
let cPassword = confirmPassword.value;
if (cPassword != passwordValue) {
  confirmPassword.setCustomValidity("Passwords do not match");
} else {
  confirmPassword.setCustomValidity("");
}
});

signIn.addEventListener('click', function() {
  contentWrapper.style.gridTemplateColumns = "1.2fr .8fr";
  leftSideOne.id = "nonActive";
  rightSideOne.id = "nonActive";
  leftSideTwo.removeAttribute('id');
  rightSideTwo.removeAttribute('id');
});

signUp.addEventListener('click', function() {
  contentWrapper.style.gridTemplateColumns = ".8fr 1.2fr";
  leftSideOne.removeAttribute('id');
  rightSideOne.removeAttribute('id');
  leftSideTwo.id = "nonActive";
  rightSideTwo.id = "nonActive";
});

