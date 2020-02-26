/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const userData =[
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

 const createTweetElements = obj => {
   const date1 = new Date(obj.created_at);
   const date2 = Date.now();
   const daysAgo = Math.round((date2 - date1) / 1000 / 60 / 60 / 24)
   const markup = `
      <article class="tweet">
        <header>
          <img src='${obj.user.avatars}'>
          <p class="display-name">${obj.user.name}</p>
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
 }

 
 $(document).ready(function() {
   renderTweets(userData);
 })