$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var age = parseInt("#formOne");
    var age = $("input#inputAge").val();

    if (age >=18) {
      $("#oldEnough").show();
    } else {
      $("#tooYoung").show();
    }









    event.preventDefault();
  });









});
