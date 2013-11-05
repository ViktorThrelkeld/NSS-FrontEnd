var database = require('../modules/database');
/*
 * GET todo page
 */

exports.index = function(req, res){
  var todo = database.read(__dirname + '/../db/todo.json');
  res.render('todo', {title: 'To Do: ToDo', todo: todo});
};


/*
 * GET new todo page
 */

exports.new = function(req, res){
  res.render('todo/new', {title: 'To Do New: ToDo'} );
};

/*
 *POST todo
 */

exports.create = function(req, res){


  res.redirect('/todo')
};