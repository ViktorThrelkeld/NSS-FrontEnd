$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  $('form#priority').on('submit', submitPriority);
  $('form#todo').on('submit', submitTodo);
  $('table#todos').on('click', 'input[type="checkbox"]', clickCompleted);//
  $('table#todos').on('click', '.delete > button', clickDelete);
} //                             this specifies where the click was because it was dynamically created

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function submitPriority(e){//when we get back a response
  submitAjaxForm(e, this, function(data, status, jqXHR){
    htmlAddPriorityToSelect(data);
  });
}

function submitTodo(e){//e is event, this is form, status is ?
  submitAjaxForm(e, this, function(data, status, jqXHR){
    htmlAddTodo(data);
  });
}

function clickCompleted(){
  var id = $(this).parent().parent().data('todo-id');
  sendGenericAjaxRequest('/todos/' + id + '/completed', {}, 'post', 'put', null, function(data, status, jqXHR){
    htmlTodoCompleted(data);
  });
}

function clickDelete(){
  var id = $(this).parent().parent().data('todo-id');//finds data attribute for the tr.
  sendGenericAjaxRequest('/todos/' + id, {}, 'post', 'delete', null, function(data, status, jqXHR){
    htmlRemoveTodo(data);//above is the url we want to send to, {} is the body, post is the verb to send, delete overwrites post, null is where we would prevent default,
  });//data above is our returned todo
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function submitAjaxForm(e, form, successFn){
  var url = $(form).attr('action');
  var data = $(form).serialize();  //serialze takes all fields into one package

  var options = {};
  options.url = url;
  options.type = 'POST';
  options.data = data;   //shows up in body of request
  options.success = successFn; //name of function to call when server responds to request
  options.error = function(jqXHR, status, error){console.log(error);};

  $.ajax(options);
  e.preventDefault();  //stops the default request
}

function sendGenericAjaxRequest(url, data, verb, altVerb, event, successFn){
  var options = {};
  options.url = url;
  options.type = verb;//main verb - Get  or POST
  options.data = data;
  options.success = successFn;//function to call on success
  options.error = function(jqXHR, status, error){console.log(error);};

  if(altVerb) options.data._method = altVerb;//browser can only do GET or POST, if there is a verb, add _method and replace verb
  $.ajax(options);
  if(event) event.preventDefault();// if event, call default
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlAddPriorityToSelect(priority){
  var $option = $('<option>');
  $option.val(priority._id);
  $option.text(priority.name);

  $('select#priority-select').append($option);
  $('form#priority input').val('');
  $('form#priority input[name="name"]').focus();
}

function htmlAddTodo(todo){
  var tr = '<tr><td class="completed"></td><td class="title"></td><td class="due-date"></td><td class="priority"></td><td class="delete"></td></tr>';
  var $tr = $(tr);
  $tr.css('background-color', todo.priority.color);
  $tr.attr('data-todo-id', todo._id);
  $tr.children('.completed').append('<input type="checkbox">');
  $tr.children('.title').text(todo.title);
  $tr.children('.due-date').text(moment(todo.dueDate).format('dddd, MMMM Do YYYY'));
  $tr.children('.priority').text(todo.priority.name);
  $tr.children('.delete').append('<button class="tiny radius alert">Delete</button>');

  $('table#todos tbody').append($tr);
}

function htmlRemoveTodo(todo){
  $('tr[data-todo-id="' + todo._id + '"]').remove();
}

function htmlTodoCompleted(todo){
  var decoration = todo.completed ? 'line-through' : 'none';
  $('tr[data-todo-id="' + todo._id + '"]').css('text-decoration', decoration);
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //