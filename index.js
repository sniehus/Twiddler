

$(document).ready(() => {


  var feed = streams.home;
  const $body = $('body').attr('id', 'main');


  const $title = $('<h1>').text('Twiddler').attr('id', 'title');
  $title
    .css('color', 'rgb(0,38,230')
    .css('border', '10px groove')
    .css('font-size', '76px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'white')
    .css('border-radius', '10px');
  $body.append($title);




  const $section = $('<section>').attr('id', 'tweets').css('color', 'green');
  const $header = $('<h3>').text('Tweets');
  $section.append($header);
  $section.appendTo($('#main'));



  const $nextHeader = $('<h3>').text('????').attr('id', 'next');
  $nextHeader
    .css('color', 'rgb(0,38,230')
    .css('font-size', '26px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'grey')
    .css('border-radius', '10px')
    .appendTo($('#title'));



  //form to contain 2 text input fields
  const $form = $('<form>').attr('id', 'form');
  $($form).append('<input type="text" attr id="name" />').val('lkj');
  $($form).append('<input type="text" attr id="message" />').val('');
  $form.append($('<button>').text('share')).attr('id', 'button');
  $form.appendTo($('#next'));

  
  //Which function call/use   how do i set the username?
  //create a function for the click of button
  $('box').click(function () {
    //set value of nameLabel to user name
    //if left blank default to visitor
    if (!visitor) {
      window.visitor = 'visitor';
    }
    else {
      window.visitor = `@+ ${('#name').val()}`;
    }
    //set the value of message to
    message = ('#message').val;
    //call tweet function
    writeTweet(message);
    return $(tweets);
  });



  //?hide tweets??  add click function to this
  const $show = $('<button>').text('show tweets').attr('id', 'show')
    .css('color', 'rgb(255,128,213)')
    .css('font-size', '20px')
    .css('position', 'relative')
    .appendTo($('#main'));

  //run each before this to only show tweets for a clicked user
  //add a click function to users //change to var if not working
  

  $('box').click(function () {
  const $tweets = (streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const $user = $('<div>').attr('class', 'user');
    $user.text('@' + tweet.user).css('color', 'red').attr('id', 'user');
    const $message = $('<div>');
    $message.text(tweet.message).css('color', 'black').attr('id', 'message');

    var timeSince = function () {
      let x = (Date.now() - tweet.created_at) / 1000;
      if (x < 60) {
        return 'less than a minute ago';
      }
      if (x < 360) {
        //return `${Math.floor(360 / x)} hours ago`;
        return moment().startOf('hour').fromNow();
      }
      return `${Math.floor((360 * 24) / x)} days ago`;
    };
    const sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    //not using this?
    //const text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

    $('#main').append($user);
    $('#main').append($message);
    $('#main').append(`sent: ${sentTime}, ${timeSince()}`);

    //not using this?
    //$tweet.text(text);
    //return $tweet;

  }));

});

  

//run the function every five second
//setInterterval(function, interval)











/*
  <div class="container">
      <div class="col-sm-4">Col 1</div>.attr('id', 'col1');
      <div class="col-sm-8">Col 2</div>.attr('id', 'col2');
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
*/

