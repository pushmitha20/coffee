document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = this.querySelector('input[placeholder="Your name"]').value.trim();
  const phoneRaw = this.querySelector('input[placeholder="Your number"]').value.trim();
  const feedback = this.querySelector('textarea').value.trim();

  const namePattern = /^[A-Za-z\s]+$/;

  // Remove all non-digit characters from phone input
  const phoneDigits = phoneRaw.replace(/\D/g, '');

  if (name === '') {
    alert('Please enter your name.');
    return;
  } else if (!namePattern.test(name)) {
    alert('Name can only contain letters and spaces.');
    return;
  }

  if (phoneRaw === '') {
    alert('Please enter your phone number.');
    return;
  } else if (phoneDigits.length !== 10) {
    alert('Phone number must contain exactly 10 digits.');
    return;
  }

  if (feedback === '') {
    alert('Please provide your feedback.');
    return;
  } else if (feedback.length < 10) {
    alert('Feedback should be at least 10 characters long.');
    return;
  }

  alert('Thank you for your feedback!');
  this.reset();
});
