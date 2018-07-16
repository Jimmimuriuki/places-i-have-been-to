// business logic
 function Destination(first, second, third, fourth, fifth) {
   this.destinationName = first;
   this.locationName = second;
   this.landmarksName = third;
   this.timeName = fourth;
   this.notesName = fifth;
 }


// user-interface logic

$(document).ready(function() {
  $("form#place").submit(function(event) {
    event.preventDefault();

    var inputtedDest = $("input#new-destination-name").val();
    var inputtedLoc = $("input#new-location-name").val();
    var inputtedLand = $("input#new-landmark-name").val();
    var inputtedTim = $("input#new-time-name").val();
    var inputtedNot = $("input#new-notes-name").val();

    var newDestination = new Destination(inputtedDest, inputtedLoc, inputtedLand, inputtedTim, inputtedNot);
    $("ul#destname").append("<li><span class = 'destination' 'destination-danger'>" + newDestination.destinationName + "</span></li");

    $("input#new-destination-name").val("");
    $("input#new-location-name").val("");
    $("input#new-landmark-name").val("");
    $("input#new-time-name").val("");
    $("input#new-notes-name").val("");


    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.destinationName);
      $(".destination-name").text(newDestination.destinationName);
      $(".location-name").text(newDestination.locationName);
      $(".landmark-name").text(newDestination.landmarksName);
      $(".time-name").text(newDestination.timeName);
      $(".notes-name").text(newDestination.notesName);
  });
});
});
