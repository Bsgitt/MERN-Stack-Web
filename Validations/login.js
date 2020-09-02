const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use Validator function
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Email Checking...
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }
  //Password Checking...
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  //return validatevalues
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
