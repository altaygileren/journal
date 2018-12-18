const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.headline = !isEmpty(data.headline) ? data.headline : '';
  data.body = !isEmpty(data.body) ? data.body : '';

  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'A Headline is required';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'A blog is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}