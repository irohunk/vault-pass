$(document).ready(function() {
  // create the dropdown menu
  const dropdownHtml = `
 <div class="dropdown">
  <button class="dropdown-toggle">Catagories</button>
  <ul class="drop-menu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
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
