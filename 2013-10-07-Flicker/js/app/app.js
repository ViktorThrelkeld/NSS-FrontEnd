'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlicker);
  $('#clear').click(clear);
  $('#delete').click(deleteSelected);
  $('#save').click(saveImages);
  $('#photos').on('dblclick', '.photo', removeImage);
  $('#photos').on('click', '.photo', selectImage);

}

function saveImages(){
  var $selectedImages = $('.selected');
  $selectedImages.removeClass('selected');
  $('#saved-photos').prepend($selectedImages);
}

function deleteSelected(){
  $('.selected').remove();
}

function selectImage(){
  $(this).toggleClass('selected');

}

function clear(){
  $('#photos').empty();
}

function removeImage(){
  $(this).remove();
}

function searchFlicker(){
  var API_KEY = '88d27ef8b6ce46c7a7b0e37d399dfc17';
  var PER_PAGE = 10;
  var page = 1;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data){
  for(var i =0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}

function createImage(photo){
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
}