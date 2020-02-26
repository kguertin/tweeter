/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 const createTweetElements = obj => {
   const date1 = new Date(obj.created_at);
   const date2 = Date.now();
   const daysAgo = Math.round((date2 - date1) / 1000 / 60 / 60 / 24);
   const markup = `
      <article class="tweet">
        <header>
          <div>
          <img src='${obj.user.avatars}'>
          <p class="display-name">${obj.user.name}</p>
          </div>
          <p class="user-name">${obj.user.handle}</p>
        </header>
        <div class="tweet-body">
          <p>${obj.content.text}</p>
        </div>
        <footer>
          <h4 class="date">${daysAgo} days ago</h4>
          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </article>`

      return markup;
 };

 const renderTweets = arr => {
   for (let i of arr) {
     const $tweet = createTweetElements(i);
     $('#published-tweets').append($tweet);
   }
 };

 const submitTweet = () => {
   $('form').on('submit', e => { 
    e.preventDefault();
    const data = $('textarea').serialize();
    $.ajax({url: '/tweets', method: 'POST', data})
      .then(() => {
        console.log('success')});
   })
  }
     const loadTweets = () => {
      $.ajax({url: '/tweets/', method: 'GET', dataType: 'json'})
        .then((result) => {
          renderTweets(result)
        })
     }

 
 $(document).ready(function() {
   submitTweet();
   loadTweets();
 })

