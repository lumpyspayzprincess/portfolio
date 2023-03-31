const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // check if name field is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }
  
  // check if email field is empty or not valid
  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }
  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return;
  }
  
  // check if message field is empty
  if (messageInput.value.trim() === '') {
    alert('Please enter your message');
    messageInput.focus();
    return;
  }
  
  // if all fields are valid, submit the form
  form.submit();
});

// helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}