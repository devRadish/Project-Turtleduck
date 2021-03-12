// Set the date we're counting down to 
var ocCountDownDate = new Date("Mar 25, 2021 10:00:00").getTime();

// Update the count down every 1 second
var ocX = setInterval(function() {

	// Get today's date and time
	var ocNow = new Date().getTime();

	// Find the distance between now and the count down date
	var ocDistance = ocCountDownDate - ocNow;

	// Time calculations for days, hours, minutes and seconds
	var ocDays = Math.floor(ocDistance / (1000 * 60 * 60 * 24));
	var ocHours = Math.floor((ocDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var ocMinutes = Math.floor((ocDistance % (1000 * 60 * 60)) / (1000 * 60));
	var ocSeconds = Math.floor((ocDistance % (1000 * 60)) / 1000);

	function pad(number, length) {

		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

		return str;

	}

	// Display the result in the element with id="countdown"
	document.getElementById("ocD").innerHTML = pad(ocDays, 3);
	document.getElementById("ocH").innerHTML = pad(ocHours, 2);
	document.getElementById("ocM").innerHTML = pad(ocMinutes, 2);
	document.getElementById("ocS").innerHTML = pad(ocSeconds, 2);

	// If the count down is finished, write some text
	if (ocDistance < 0) {
		clearInterval(ocX);
		document.getElementById("ocD").innerHTML = 0;
		document.getElementById("ocH").innerHTML = 0;
		document.getElementById("ocM").innerHTML = 0;
		document.getElementById("ocS").innerHTML = 0;
		if (ocDistance > -10000) {
			confetti.start(10000, 400);
		} else {
			confetti.stop();
		}
	}
}, 1000);