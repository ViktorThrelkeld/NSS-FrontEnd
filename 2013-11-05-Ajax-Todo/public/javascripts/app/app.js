$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  $('form#priority').on('submit', submitPriority);

}

function submitPriority(e){
  var url = $(this).attr('action');
  var data = $(this).serialize();
  var options = {};
  options.url = url;
  options.type = 'POST';
  options.data = data;
  options.success = function(data, status, jqXHR){
    console.log('success');
  };
  options.error = function(jqXHR, status, error){
    console.log('error');

  };

  $.ajax(options);

  e.preventDefault();
};

