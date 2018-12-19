const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  
  if (!Validator.isLength(data.text, { min: 1, max: 99999 })) {
    errors.text = 'Comment must be at least 1 character';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Comment field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}