$(document).ready(function() {
  $('textarea').keyup(function() {
    const $tweetBody = $(this);
    let $counter = $tweetBody.siblings('footer').children('.counter');
    $counter.text(`${140 - $tweetBody.val().length}`);
    if (Number($counter.text()) < 0) {
      $counter.addClass('max-chars');
    } else {
      $counter.removeClass('max-chars');
    }
  })
});