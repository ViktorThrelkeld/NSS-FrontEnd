$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#game').on('submit', submitGame);

}


// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //


function submitGame(e){
  // e.preventDefault();
  var url = $(this).attr('action');
  debugger;
  var name = this.player.value;
  var number = this.squares.value;
  // var cards = this.cards.value;

  var data = {
    player : name,
    squares : number
    // cards : []
  };

  // $.ajax({
  //   url: url,
  //   type: "GET",
  //   data: data,
  //   success: function(data, status, jqXHR){
  //    htmlStartGame(data);
  //  },
  //   error: function(jqXHR, status, error){
  //   console.log(error);
  //  }
  // });
  sendGenericAjaxRequest(url, data, 'post', null, e, function(data, status, jqXHR){
    htmlStartGame(data);
  });

}


// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlStartGame(game){
  $('#player').text(game.player);
  $('input[name="player"]').val('');
  $('input[name="squares"]').val('');
  $('#cards').attr('data-game', game._id);

  // numberShuffle(game.squares);
  $('#cards').text(game.cards);

}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //



function sendGenericAjaxRequest(url, data, verb, altVerb, event, successFn){
  var options = {};
  options.url = url;
  options.type = verb;
  options.data = data;
  options.success = successFn;
  options.error = function(jqXHR, status, error){console.log(error);};

  if(altVerb) options.data._method = altVerb;
  $.ajax(options);
  if(event) event.preventDefault();
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

// function numberShuffle(x){
//   var nums = [];
//   for(var i = 0; i < x; i++){
//     nums.push(i);
//     nums.push(i);
//     return nums;
//   }

// }