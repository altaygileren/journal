const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.headline = !isEmpty(data.headline) ? data.headline : '';
  data.body = !isEmpty(data.body) ? data.body : '';

  
  if (!Validator.isLength(data.headline, { min: 5, max: 50 })) {
    errors.headline = 'Post must be between 5 and 50 characters';
  }
  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'Headline field is required';
  }



  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field is required';
  }
  if (!Validator.isLength(data.body, { min: 10, max: 9999999 })) {
    errors.body = 'Post must be at least 10 characters';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}