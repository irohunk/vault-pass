// Client facing scripts here
$(() => {
  // $('#fetch-users').on('click', () => {
  $.ajax({
    method: 'GET',
    url: '/users'// api/ when using database
  })
    .done((response) => {
      console.log('response', response);
      const $usersList = $('#users');
      $usersList.empty();

      for (const user of response) {
        const text = `${user.name}- ${user.website}-${user.password}`;
        $(`<li class="user">`).text(text).appendTo($usersList);
      }
    });
  // });
});
