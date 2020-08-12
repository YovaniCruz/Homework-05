$(document).ready(function () {
  var currentTime = moment().format("dddd, MMMM Do YYYY");

  $("#clock-display").text(currentTime)
  $(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, activity)
    console.log(localStorage)
    checkHour()
  });

  function checkHour() {
    var currentHour = moment().hours();
    console.log(currentHour)

    $(".time-block").each(function() {
      var ourHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(ourHour)
      //three if statements for past, present, future
      if (ourHour < currentHour) {
        $(this).children(".description").addClass("past")
      }else if(ourHour === currentHour) {
        $(this).children(".description").addClass("present");
          $(this).children(".description").removeClass("past");
      } else {
        $(this).children(".description").addClass("future");
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");

      }
    }) 
  }


  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

})