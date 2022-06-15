
$(document).ready(() => {

  const $body = $('body').attr('id', 'main');
  $body.html('Tweeds:').css('weight', 'bold');
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
    .prependTo('#main');


  const $nextHeader = $('<h3>').text('Whatcha Thinking?').attr('id', 'next');
  $nextHeader
    .css('color', 'rgb(0,38,230')
    .css('font-size', '26px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'grey')
    .css('border-radius', '10px')
    .appendTo('#head');


  const $box = $('<button>').text('share').attr('id', 'button')
    .css('color', 'rgb(255,128,213)')
    .css('font-size', '20px')
    .appendTo('#next');


  $(function () {
    $('#button').bind('click', function () {
      var div = $('<div />');
      div.html(GenerateTextbox(' '));
      $('#TextBoxContainer').append(div);
    });
    $('#button').bind('click', function () {
      var values = ' ';
      $('input[name=CreateTextbox]').each(function () {
        values += $(this).val() + '\n';
      });
      alert(values);
    });
    $('body').on('click', '.remove', function () {
      $(this).closest('div').remove();
    });
  });
  function GenerateTextbox(value) {
    return '<input name = "CreateTextbox" type= "text" value = " " + value + " " />' +
      '<input type="button" value="Remove" class="remove" />'
  };

  /*
  color: rgb(255, 255, 255); font-size: 16px; line-height: 16px; 
  padding: 6px; border-radius: 10px; font-family: Georgia, serif; 
  font-weight: normal; text-decoration: none; font-style: normal; 
  font-variant: normal; text-transform: none; background-image: 
  linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; 
  border: 2px solid rgb(28, 110, 164); display: inline-block;}
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


  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}, Twiddled at ${tweet.created_at}`;

    $tweet.text(text);

    return $tweet;

  });
  $body.append($tweets);

});



