const inputs = document.querySelectorAll("input"); //the value after = is an html collection//

const patterns = {
  userName: /^[a-z\d]{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  age: /^(1[89]|[2-9][0-9])$/,
};

//validation function
function validate(field, regex) {
  //   console.log(regex.test(field.value)); //use this to test if its true or false.//
  // to check wether this field is valid or invalid then use:
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
