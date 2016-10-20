$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("#initially-hidden").show();
    $("#initially-shown").hide();
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $("#initially-shown").show();
    $("#initially-hidden").hide();
  });


});
