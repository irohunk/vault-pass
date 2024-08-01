$(document).ready(function() {
  // create the dropdown menu
  const dropdownHtml = `
 <div class="dropdown">
     <label for="categories">Choose a category:</label>
  <select name="category" id="category" class="dropdown-toggle">
    <option value="Social">       Social</option>
    <option value="Work-related"> Work-related</option>
    <option value="Entertainment">Entertainment</option>
  </select>
</div>
  `;


  // add the dropdown to a container
  $('#dropdownContainer').append(dropdownHtml);

  // add the click event for the dropdown
  $('.dropdown-toggle').click(function(event) {
    console.log('button clicked');
    event.preventDefault();
    $(event.currentTarget).next('.drop-menu').toggleClass('show');
  });

  // closing the dropdown when clicking outside
  $(document).click(function(event) {
    if (!$(event.target).closest('.dropdown').length) {
      $('.dropdown-menu').removeClass('show');
    }
  });
});

