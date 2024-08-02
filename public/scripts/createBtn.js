$(document).ready(function() {
  $('#createBtn').click(function(event) {
    event.preventDefault();

    $.ajax({
      url: '/new',
      type: 'GET'
    })

      .then(response => {
        console.log(response);
        window.location.assign('/new');
      })
      .catch(err => {
        console.error(err);
      });
  });
});
