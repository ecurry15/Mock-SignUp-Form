const phone = document.getElementById("phone");
phone.addEventListener('keyup', function() {
  let phoneValue = '';
  phoneValue = phone.value;
  console.log(phoneValue);
  if (/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneValue)) {
    phone.setCustomValidity("");
  } else {
    phone.setCustomValidity("please type a 10 digit number Ex.000-000-0000");
  }
})