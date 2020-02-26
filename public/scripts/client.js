/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const userData =
{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

 const createTweetElements = obj => {
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
          <h4 class="date">${new Date(obj.created_at).toDateString()} day ago</h4>
          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </article>`

      return markup;
 };

 const $tweet = createTweetElements(userData);
 
 $(document).ready(function(){
   $('#published-tweets').append($tweet);
 })