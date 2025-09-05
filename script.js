const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const successMessage = document.getElementById('successMessage');
const confirmedEmail = document.getElementById('confirmedEmail');
const container = document.querySelector('.container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email) {
    errorMsg.textContent = 'Email required';
    emailInput.classList.add('invalid');
  } else if (!validateEmail(email)) {
    errorMsg.textContent = 'Valid email required';
    emailInput.classList.add('invalid');
  } else {
    errorMsg.textContent = '';
    emailInput.classList.remove('invalid');
    confirmedEmail.textContent = email;
    container.style.display = 'none';
    successMessage.classList.add('active');
  }
});

function dismissSuccess() {
  successMessage.classList.remove('active');
  container.style.display = 'flex';
  emailInput.value = '';
  emailInput.focus();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}