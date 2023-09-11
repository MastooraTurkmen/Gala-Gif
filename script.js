// Get the form element and confirmation message element
const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const body = document.body;

// Add event listener to the form submission
rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the selected attendance value
  const attendance = document.getElementById('attendance').value;
  
  /* Challenge:
      * Update the JavaScript to display this GIF if the user is not attending:
        https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif
  */

  // Display confirmation message based on attendance selection
  if (attendance === 'yes') {
    confirmationMessage.innerHTML = '🎉 Party on! We look forward to seeing you at the GIF Gala!';
    body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
  } else if (attendance === 'no') {
    confirmationMessage.innerHTML = '😔 We will miss you at the GIF Gala!';
    body.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")';
  }

  // Show the confirmation message
  confirmationMessage.style.display = 'block';

  // Reset the form
  rsvpForm.reset();
});
