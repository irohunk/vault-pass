$(document).ready(function() {
  $('form#new-pass').submit(function(event) {
    event.preventDefault();
    // console.log('Form submitted');

    console.log(event.target.elements);
    const {url, username, password} = event.target.elements;
    const category = $('#category').val();
    // console.log(url.value);

    // check if the fields are MT
    if (!url.value || !username.value || !password.value) {
      $('#alert').slideDown();
      return;
    }

    const data = {
      url: url.value,
      username: username.value,
      password: password.value,
      category: category
    };
    // console.log(data);

    $.ajax({
      url:         '/new',
      type:        'POST',
      data
    })
      .then(response => {
        console.log(response);
        window.location.assign('/');// takes back to homepage
      });
  });

  $('form#edit-pass').submit(function(event) {
    event.preventDefault();
    // console.log('Form submitted');

    // console.log(event.target.elements);
    const {category, url, username, password} = event.target.elements;
    // console.log(url.value);
    const data = {
      url: url.value,
      username: username.value,
      password: password.value,
      category: category.value
    };
    // console.log(data);

    $.ajax({
      url:          $('form#edit-pass').attr('action'),
      type:        'POST',
      data
    })
      .then(response => {
        console.log(response);
        window.location.assign('/');// takes back to homepage
      });
  });

  $('#cancel').on('click', () => {
    window.location.assign('/');// takes back to homepage
  })
});

