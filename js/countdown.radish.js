// Set the date we're counting down to
var rCountDownDate = new Date("Jan 4, 2022 5:00:00").getTime();

// Update the count down every 1 second
var rX = setInterval(function() {

	// Get today's date and time
	var rNow = new Date().getTime();

	// Find the distance between now and the count down date
	var rDistance = rCountDownDate - rNow;

	// Time calculations for days, hours, minutes and seconds
	var rDays = Math.floor(rDistance / (1000 * 60 * 60 * 24));
	var rHours = Math.floor((rDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var rMinutes = Math.floor((rDistance % (1000 * 60 * 60)) / (1000 * 60));
	var rSeconds = Math.floor((rDistance % (1000 * 60)) / 1000);

	function pad(number, length) {

		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

		return str;

	}

	// Display the result in the element with id="countdown"
	document.getElementById("rD").innerHTML = pad(rDays, 3);
	document.getElementById("rH").innerHTML = pad(rHours, 2);
	document.getElementById("rM").innerHTML = pad(rMinutes, 2);
	document.getElementById("rS").innerHTML = pad(rSeconds, 2);

	// If the count down is finished, write some text
	if (rDistance < 0) {
		clearInterval(rX);
		document.getElementById("rD").innerHTML = 0;
		document.getElementById("rH").innerHTML = 0;
		document.getElementById("rM").innerHTML = 0;
		document.getElementById("rS").innerHTML = 0;
		confetti.start(10000, 350);
	}
}, 1000);