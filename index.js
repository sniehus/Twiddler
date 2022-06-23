

$(document).ready(() => {
  const $body = $('body').attr('id', 'main');
  $('#main').css('background-color', 'rgb(153,170,255)');
  $body.html('');

  const $title = $('<h1>').text('Twiddler').attr('id', 'title');
  $title
    .css('color', 'rgb(25,25,255)')
    .css('border', '10px groove')
    .css('font-size', '76px')
    .css('line-height', '76px')
    .css('padding', '6x')
    .css('background-color', 'cyan')
    .css('border-radius', '10px');
  $body.append($title);

  const $form = $('<form>').attr('id', 'form');
  //$($form).append('<input type="text" attr id="name" />');
  //$('#name').val('');
  //console.log('#name').val();
  $($form).append('<input type="text" attr id="message" />');
  $('#message').val('');
  $form.append($('<button>').text('share')).attr('id', 'button');
  $form.appendTo($('#main'));
  $('#button').css('color', 'rgb(25,25,255)')
    .css('font-size', '20px');







  const $section = $('<section>').attr('id', 'tweets').css('color', 'blue');
  const $header = $('<h3>').text('Tweets').css('font-size', '80px');

  //$section.append($header);
  //$section.appendTo($('#main'));


  const $tweets = $(streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const $user = $('<div>').attr('class', 'user');
    $user.text('@' + tweet.user).css('color', 'rgb(25,25,255)').attr('id', 'userName');
    var $message = $('<div>');
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
    var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    //not using this?
    var text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

    $('#main').append($user);
    $('#main').append($message);
    $('#main').append(`sent: ${sentTime}, ${timeSince()}`);

    //not using this?
    $tweet.text(text);


    var reload = function () {
      $body.append($tweets);
    };
    var refresh = function () {
      setInterval(reload, 500);
    };
    return refresh();

    //return $tweet;
  }));

  $('#button').click(function () {
    var shareTweet = (shareMessage) => {
      var shareMessage = ($('#message').val());

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
      var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

      streams.users.push(`@visitor ${shareMessage}, sent: ${sentTime}, ${timeSince()}`);
      streams.home.push(shareMessage);
      $body.append($tweets);

    };
    return shareTweet();
  });
  $('#user').click(function (event) {
    streams.users[('#user')].map((tweet) => {
      if (tweet.user === $('#userName')) {
        $tweet = $('<div></div>');
        $user = $('<div>').attr('class', 'user');
        $user.text('@' + tweet.user).css('color', 'red').attr('id', 'userName');
        $message = $('<div>');
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
        var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

        //not using this?
        //const text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

        $('#main').append($user);
        $('#main').append($message);
        $('#main').append(`sent: ${sentTime}, ${timeSince()}`);
        //not using this?
        //$tweet.text(text);
        return $tweet;
      }

    });
  });
});

//  tweet.user = ($('#name').val());
//tweet.message = ($('#message').val());
/*



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
  $($form).append('<input type="text" attr id="name" />');
  $('#name').val('');
  //console.log('#name').val();
  $($form).append('<input type="text" attr id="message" />');
  $('#message').val('').text('sdklfkfj');
  $form.append($('<button>').text('share')).attr('id', 'button');
  $form.appendTo($('#next'));

  //*****Add to streams and rerun show function */
//Which function call/use   how do i set the username?
//create a function for the click of button


/*
$('#button').click(function () {                        
  var shareTweet = (shareMessage) => {
    var shareMessage = ($('#message').val());
    var tweeter = ($('#name').val());
    streams.users.tweeter.push(shareMessage);
    streams.home.push(shareMessage);
  };
  //  tweet.user = ($('#name').val());
  //tweet.message = ($('#message').val());
  */

/*
var $tweets = $('show').click(streams.home.map((tweet) => {
  var $tweet = $('<div></div>');
  var $user = $('<div>').attr('class', 'user');
  $user.text('@' + tweet.user).css('color', 'red').attr('id', 'userName');
  var $message = $('<div>');
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
  var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  //not using this?
  var text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

  $('#main').append($user);
  $('#main').append($message);
  $('#main').append(`sent: ${sentTime}, ${timeSince()}`);

  //not using this?
  //$tweet.text(text);

  return;
}));
 
$('#button').click(function () {                        
  var shareTweet = (shareMessage) => {
    var shareMessage = ($('#message').val());
    streams.username = ($('#name').val());
    streams.users[username].push(shareMessage);
    streams.home.push(shareMessage);

  };
  //  tweet.user = ($('#name').val());
  //tweet.message = ($('#message').val());
});
//});


//set value of nameLabel to user name
//if left blank default to visitor
//if (tweeter === '') {
//  alert('enterUsername');
//} 



//call tweet function
$('#main').prepend(tweet.user);
$('#main').prepend(tweet.message);
//return $('#show').click;
//return $('#show').click();
return setInterval($('#show').click, 100000000);

});
*/
/*
const tweet = {
  user: randomElement(users),
  message: randomMessage(),
  created_at: new Date(),
};
*/

/*
//?hide tweets??  add click function to this
const $show = $('<button>').text('show tweets').attr('id', 'show')
  .css('color', 'rgb(255,128,213)')
  .css('font-size', '20px')
  .css('position', 'relative')
  .appendTo($('#main'));




$('#show').click(function () {

  var $tweets = $('show').click(streams.home.map((tweet) => {
    var $tweet = $('<div></div>');
    var $user = $('<div>').attr('class', 'user');
    $user.text('@' + tweet.user).css('color', 'red').attr('id', 'userName');
    var $message = $('<div>');
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
    var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    //not using this?
    var text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

    $('#main').append($user);
    $('#main').append($message);
    $('#main').append(`sent: ${sentTime}, ${timeSince()}`);

    //not using this?
    //$tweet.text(text);


  }));

});


//run each before this to only show tweets for a clicked user
//add a click function to users //change to var if not working
$('user').attr('onClick', '$userClick()');

var $userClick = function (tweet) { };
streams.home.map((tweet) => {
  if (tweet.user === $('#userName')) {
    $tweet = $('<div></div>');
    $user = $('<div>').attr('class', 'user');
    $user.text('@' + tweet.user).css('color', 'red').attr('id', 'userName');
    $message = $('<div>');
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
    var sentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    //not using this?
    //const text = `@${$user} ${tweet.message}, sent: ${sentTime}, ${timeSince()}`;

    $('#main').append($user);
    $('#main').append($message);
    $('#main').append(`sent: ${sentTime}, ${timeSince()}`);
    //not using this?
    //$tweet.text(text);
    return $tweet;
  }
});
*/

