const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // First and last name length validator
  if (!Validator.isLength(data.firstname, { min: 2, max: 20 })) {
    errors.firstname = 'First name must be between 2 and 20 characters';
  }
  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'Last name must be between 2 and 30 characters';
  }
  // First and last name empty field validator
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'First name field is required';
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Last name field is required';
  }

  // Email validator
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password entry validator

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password2 = 'Password confirmation field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}