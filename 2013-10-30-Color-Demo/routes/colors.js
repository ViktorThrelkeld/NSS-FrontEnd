
/*
 * GET /colors
 */

exports.index = function(req, res){
  var colors = ['blue', 'orange', 'purple', 'olive', 'green'];
  res.render('colors/index', {title: 'Colors', colors: colors});
};
