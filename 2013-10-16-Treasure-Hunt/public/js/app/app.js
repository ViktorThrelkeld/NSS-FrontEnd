'use strict';

// Firebase Schema
var Δdb;
var Δpositions;
var Δfavorites;

// Local Schema (defined in keys.js)
db.positions = [];
db.favorites = [];
db.path = [];


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase(db.keys.firebase);
  Δpositions = Δdb.child('positions');
  Δfavorites = Δdb.child('favorites');
  Δpositions.on('child_added', dbPositionAdded);
  $('#start').click(clickStart);
  $('#add').click(clickAdd);
  initMap(36, -86, 5);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function dbPositionAdded(snapshot){
  var position = snapshot.val();
  var latLng = new google.maps.LatLng(position.latitude, position.longitude);

  db.positions.push(position);

  if(db.positions.length === 1){
    // htmlAddStartIcon(latLng);
    // htmlInitializePolyLine();
  }

  db.path.push(latLng);
  // db.marker.setPosition(latLng);
//   // htmlSetCenterZoom(latLng);

//   $('#debug').text(position.time);

}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initMap(lat, lng, zoom){
  var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
  db.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickStart(){
  var geoOptions = {enableHighAccuracy: true, maximumAge: 1000, timeout: 60000};
  db.watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
}

function clickAdd(){

  var favorite = {};
  // favorite.latitude = (db.??.latitude);
  // favorite.longitude = (db.??.longitude);
  favorite.title = (getValue('#input'));
  Δfavorites.push(favorite);

}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
function geoSuccess(location){
    alert('start');
    var position = {};
    position.latitude = (location.coords.latitude);
    position.longitude = (location.coords.longitude);
    Δpositions.push(position);
    console.log('location');
  }


function geoError(){
  console.log('Geo Error');
}
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
