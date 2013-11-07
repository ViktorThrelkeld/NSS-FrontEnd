$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#game').on('submit', submitGame);

}


// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //


function submitGame(e){
 var url = $(this).attr('action');
 var name = this.player.value;
 var number = this.squares.value;
 var data = {
  player : name,
  squares : number
 };
  sendGenericAjaxRequest(url, data, 'post', null, e, function(data, status, jqXHR){
  htmlStartGame(data);
  });

}



// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlStartGame(game){
  $('#player').text(game.player);
  $('#cards').text(game.squares);

  $('input[name="player"]').val('');
  $('input[name="squares"]').val('');
  $('#cards').attr('data-game', game._id);


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