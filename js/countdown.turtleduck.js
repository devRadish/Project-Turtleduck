// Set the date we're counting down to
var tCountDownDate = new Date("Jan 1, 2022 22:14:00").getTime();

// Update the count down every 1 second
var tX = setInterval(function() {

	// Get today's date and time
	var tNow = new Date().getTime();

	// Find the tDistance between now and the count down date
	var tDistance = tCountDownDate - tNow;

	// Time calculations for days, hours, minutes and seconds
	var tDays = Math.floor(tDistance / (1000 * 60 * 60 * 24));
	var tHours = Math.floor((tDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var tMinutes = Math.floor((tDistance % (1000 * 60 * 60)) / (1000 * 60));
	var tSeconds = Math.floor((tDistance % (1000 * 60)) / 1000);

	function pad(number, length) {

		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

		return str;

	}

	// Display the result in the element with id="countdown"
	document.getElementById("tD").innerHTML = pad(tDays, 3);
	document.getElementById("tH").innerHTML = pad(tHours, 2);
	document.getElementById("tM").innerHTML = pad(tMinutes, 2);
	document.getElementById("tS").innerHTML = pad(tSeconds, 2);

	// If the count down is finished, write some text
	if (tDistance < 0) {
		clearInterval(tX);
		document.getElementById("tD").innerHTML = 0;
		document.getElementById("tH").innerHTML = 0;
		document.getElementById("tM").innerHTML = 0;
		document.getElementById("tS").innerHTML = 0;
		confetti.start(10000, 350);
	}
}, 1000);