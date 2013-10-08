'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  try{
    console.log(y);

  }catch(e){
      console.log('you just recieved the error:' + e);
    }

  try{
    console.log(x);
  }catch(e){
    console.log('you just recieved the error: ' + e);
  }
  try{
    o.doesntExist();
  }catch(e){
    console.log('you just recieved the error: ' + e);
  }

  console.log('you have reached the end of the function!');

}
