$(document).ready(function() {
  $('form#new-pass').submit(function(event) {
    event.preventDefault();
    // console.log('Form submitted');

    // console.log(event.target.elements);
    const {url, username, password} = event.target.elements;
    // console.log(url.value);
    const data = {
      url: url.value,
      username: username.value,
      password: password.value,
    };
    // console.log(data);

    $.ajax({
      url:         '/new-pass',
      type:        'POST',
      data
    })
      .then(response => {
        console.log(response);
        window.location.assign('/');// takes back to homepage
      });
  });
});
