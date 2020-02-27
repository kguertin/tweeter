/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
// Markup Functions
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElements = obj => {
  const date1 = new Date(obj.created_at);
  const date2 = Date.now();
  const daysAgo = Math.round((date2 - date1) / 1000 / 60 / 60 / 24);
  const markup = `
    <article class="tweet">
      <header>
        <div>
        <img src='${escape(obj.user.avatars)}'>
        <p class="display-name">${escape(obj.user.name)}</p>
        </div>
        <p class="user-name">${escape(obj.user.handle)}</p>
      </header>
      <div class="tweet-body">
        <p>${escape(obj.content.text)}</p>
      </div>
      <footer>
        <h4 class="date">${escape(daysAgo)} days ago</h4>
        <span>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </article>`

  return markup;
 };

 // Display Tweets
 const renderTweets = arr => {
   for (let i of arr) {
     const $tweet = createTweetElements(i);
     $('#published-tweets').prepend($tweet);
   }
 };

 const submitTweet = () => {

   $('form').on('submit', e => { 
    e.preventDefault();
    
    if(!$('textarea').val()){
      $('.error').slideDown();
      $('.error p').text('Nothing to Say? Please Enter a Tweet.')
    } else if ($('textarea').val().length > 140){
      $('.error').slideDown();
      $('.error p').text('Over Character Limit! Keep it under 140 Characters Please.'); 
    } else {
      const data = $('textarea').serialize();
      $.ajax({url: '/tweets', method: 'POST', data})
        .then(() => {
          loadTweets();
          $('textarea').val('');
          $('.counter').text(140);
        })
      }
    })
  }
  
  const loadTweets = () => {
    $.ajax({url: '/tweets/', method: 'GET', dataType: 'json'})
    .then((result) => {
      $('#published-tweets').empty();
        renderTweets(result);
    })
  }

// Toggle Sections
const toggleNewTweet = () => {
  $('.new-tweet').hide();
  $('.bounce').on('click', () => {
    $('.new-tweet').slideToggle();
  })
}

// Error Handler
const hideErrorMsg = () => {
  $('textarea').on('keyup', () => {
    $('.error').slideUp();
  })
}



// Load Tweets and Events
 $(document).ready(function() {
   loadTweets();
   submitTweet(); 
   toggleNewTweet();
   hideErrorMsg();
 })



