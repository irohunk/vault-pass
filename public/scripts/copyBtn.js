const copyToClipboard = function(target) {
  let $input = $(target).siblings('.username');

  // Temporarily enable the input field if it's disabled
  if ($input.is(':disabled')) {
    $input.prop('disabled', false);
    $input.select();
    document.execCommand('copy');
    $input.prop('disabled', true); // Re-disable the input field
  } else {
    $input.select();
    document.execCommand('copy');
  }
};

$(document).ready(function() {
  $('.copy-username').click(function(event) {
    copyToClipboard(this);
  });
});

const copyPassword = function(target) {
  let $input = $(target).siblings('.password');

  // Temporarily enable the input field if it's disabled
  if ($input.is(':disabled')) {
    $input.prop('disabled', false);
    $input.attr('type', 'text');
    $input.select();
    document.execCommand('copy');
    $input.prop('disabled', true); // Re-disable the input field
    $input.attr('type', 'password');
  } else {
    $input.select();
    document.execCommand('copy');
  }
};


$(document).ready(function() {
  $('.copy-password').click(function(event) {
    copyPassword(this);
  });
});




