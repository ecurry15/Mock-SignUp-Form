const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
let passwordValue = '';

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