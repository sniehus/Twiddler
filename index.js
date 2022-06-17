
$(document).ready(() => {

  const $body = $('body').attr('id', 'main');
  $body.html('Tweeds:\n').css('weight', 'bold');
  $body.css('background-color', 'grey');
  

  /*
  $('<section>')
    .attr('class', 'myButton')
    .css('color', 'rgb(255, 255, 255')
    .css('font-size', '16px')
    .css('line-height', '16px')
    .css('padding', '6x')
    .css('border-radius', '10px')
    .text('Tweed')
    .appendTo('$body');

*/

  const $mainHeader = $('<h3>').text('Twiddler').attr('id', 'head');
  $mainHeader
    .css('color', 'rgb(0,38,230')
    .css('font-size', '76px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'white')
    .css('border-radius', '10px')
    .prependTo($('#main'));


  const $nextHeader = $('<h3>').text('????').attr('id', 'next');
  $nextHeader
    .css('color', 'rgb(0,38,230')
    .css('font-size', '26px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'grey')
    .css('border-radius', '10px')
    .appendTo($('#head'));

  

  window.visitor = 'bob';
  var $x = $('#input_contents').val();


  const $box = $('<button>').text('share').attr('id', 'button')
    .css('color', 'rgb(255,128,213)')
    .css('font-size', '20px')
    .css('position', 'relative')
    //.onClick(writeTweet($x))
    .appendTo($('#next'));

  const $typeBox = $('<input>').text('hello').attr('id', 'input_contents')
    .prependTo($('#button'))
    .css('color', 'black');
  
  /*
  $tweetsList = $('<ul>').attr('class', 'tweets');

  $tweetList = $('<li>').attr('class', 'tweet');
  $tweetsList.append($tweetList).appendTo('$body');
  */



  //1. Show the user new tweets somehow. (You can show them automatically as they’re created,
  //or create a button that displays new tweets.)
  /*
  let newTweets = function newButtonClickListener() {
    //alert('Hello World');
  };
  
  var test = function test() {
    var r = $('<input/>').attr({
      type: 'button',
      id: 'field',
      value: 'New Button',
      onclick: newTweets()
    });

    $body.append(r);
  }();
  $buttonTest = $('<button>').onClick(test()).append;

 */
  //2.Display the timestamps of when the tweets were created. This timestamp should reflect the
  //actual time the tweets were created, and should not just be hardcoded.


  //3.Design your interface so that you want to look at and use the product you’re making.

  //4.Allow the user to click on any username to see that user’s timeline.
  //create a function/event handler? that iterates through all tweets an returns when input name matches


  //5.Show when the tweets were created in a human-friendly way (eg “10 minutes ago”).
  //You’ll want to use a library to do this work for you.
  //A very popular library is called Moment.js

  //6.Allow the user to tweet. (This is going to require you to understand a little more about data_generator.js, 
  //but you shouldn’t need to modify anything in that file.)

  //Add bootstrap
  //Allow the user to click on their own username to see their own timeline.
  //Allow the user to click on a hashtag to see all the tweets with that hashtag in it.

  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const user = tweet.user; 
    const twt = tweet.message;
    $(user).attr('id', 'tweeter');
    $('#tweeter').css('color', 'red');

    $body.append('@' + user + '   ');
    $body.append(twt);

    
    //$user.css('color', 'red');
    //const message = tweet.message;
    
    //$tweet.css('color', 'rgb(255,255,77)');
    
    /*
    const timeSince = function calculate() {
      let start = Date.now();
      for (let count = 0; count < 100000; count++) {
        dice = Math.ceil(Math.random() * 6);
      }
      let elapsed = start - tweet.created_at;
      return elapsed + ' ago';
    };
    const $message = `Twiddled at: ${tweet.created_at}  ${timeSince()}';
    $message.css('color', 'black');
    */
    var timeSince = function() {
      let x = (Date.now() - tweet.created_at) / 1000;
      if (x < 60) {
        return 'less than a minute ago'; 
      }
      if (x < 360) {
        return `${Math.floor(360 / x)} hours ago`;
      }
      return `${Math.floor((360 * 24) / x)} days ago`;
    };
    
    

    $body.append(`, sent: ${tweet.created_at}, ${timeSince()}`);
    
    
    
    $tweet.text(text);
    //return;

    //return $tweet;

  });
  //$body.append($tweets);

});
//Global user error/


