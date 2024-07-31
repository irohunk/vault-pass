

function generatePassword() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&(){}';
  let randomString = '';
  for (let i = 16; i > 0; --i) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomString;
}



$(document).ready(function() {
  $('#generate-password').on('click', function() {
    const password = generatePassword();
    $('[name="password"]').val(password);
  });
});


