// YOUR CODE HERE:
var app = {};
app.init = function () {};

var message = {
  username: 'misakiAndJesse',
  text: 'hey can you read this message or nah',
  roomname: 'atLeastWeTried'
};



$.ajax({
  url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});