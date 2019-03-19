$(document).ready(function() {
  var game = new Game();
  
  $('#submit-btn').click(function() {
    let frameValue = $('#frame').val();
    let rollValue = $('#roll').val();
    let pinsValue = $('#pins').val();
    $('#' + frameValue + '-' + rollValue +  '-' + 'pins').text(pinsValue);
  });
});