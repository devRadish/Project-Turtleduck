// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 22:14:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("d").innerHTML = 0;
    document.getElementById("h").innerHTML = 0;
    document.getElementById("m").innerHTML = 0;
    document.getElementById("s").innerHTML = 0;
    confetti.start(10000, 350);
  }
}, 1000);