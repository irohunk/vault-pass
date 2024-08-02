$(document).ready(function() {

  const cancelBtn = `
  <button id="cancelBtn">Cancel</button>
  `;

  $('#cancel-button').append(cancelBtn);

  $('#cancelBtn').on('click', function(event) {
    event.preventDefault();
    window.location.assign('/');
  });
});
// this is just cancel button to redirect back to the homepage
