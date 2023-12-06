function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.btn').addEventListener('click', function () {
  const emailInput = document.querySelector('.inp');
  const errorMsg = document.querySelector('.error-msg');

  const enteredEmail = emailInput.value;

  if (isValidEmail(enteredEmail)) {
    errorMsg.classList.add('hidden');
    emailInput.classList.remove('inputError');
  } else {
    errorMsg.classList.remove('hidden');
    emailInput.classList.add('inputError');
  }
});
