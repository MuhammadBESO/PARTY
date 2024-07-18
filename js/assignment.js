$(".open-toggle").on("click", function () {
  $(".left-menu").animate({ width: "250px" }, 600);
  $(".open-toggle").animate({ "margin-left": "250px" }, 600);
});
$(".closebtn").on("click", function () {
  $(".left-menu").animate({ width: "0px" }, 600);
  $(".open-toggle").animate({ "margin-left": "0px" }, 600);
});
$(".toggle").on("click", function (e) {
  $(e.target).next().slideToggle(1000);
  $(".toggle").not(e.target).next().slideUp(1000);
});
$(document).ready(function () {
  var countdownDate = new Date("2024-07-31T23:59:59").getTime();

  var countdownTimer = setInterval(function () {
    var now = new Date().getTime();

    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);

    if (distance < 0) {
      clearInterval(countdownTimer);
      $("#countdown").html("<p>Countdown is over!</p>");
    }
  }, 0);
});

const inputField = document.getElementById("inputField");
$(document).ready(function () {
  $("#inputField").on("input", function () {
    var remaining = 100 - $(this).val().length;
    $("#chars").text(remaining);
    if (remaining == 0) {
      $("#chars").text("your available character finished");
    }
  });
});
$('.link').on("click",function(e){
  // console.log($(e.target).attr("href"));
 let secId = $(e.target).attr("href");

 let secOff = $(secId).offset().top;
console.log(secOff);
 $(' body').animate({scrollTop : secOff} ,1000)

})
$('#homes').on("click",function() {
  $('html, body').animate({scrollTop: 0}, 1000);
  console.log("hhhh");
});
