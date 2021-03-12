// Set the date we're counting down to
var koCountDownDate = new Date("Jun 6, 2021").getTime();

// Update the count down every 1 second
var koX = setInterval(function() {

	// Get today's date and time
	var koNow = new Date().getTime();

	// Find the tDistance between now and the count down date
	var koDistance = koCountDownDate - koNow;

	// Time calculations for days, hours, minutes and seconds
	var koDays = Math.floor(koDistance / (1000 * 60 * 60 * 24));
	var koHours = Math.floor((koDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var koMinutes = Math.floor((koDistance % (1000 * 60 * 60)) / (1000 * 60));
	var koSeconds = Math.floor((koDistance % (1000 * 60)) / 1000);

	function pad(number, length) {

		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

		return str;

	}

	// Display the result in the element with id="countdown"
	document.getElementById("koD").innerHTML = pad(koDays, 3);
	document.getElementById("koH").innerHTML = pad(koHours, 2);
	document.getElementById("koM").innerHTML = pad(koMinutes, 2);
	document.getElementById("koS").innerHTML = pad(koSeconds, 2);

	// If the count down is finished, write some text
	if (koDistance < 0) {
		clearInterval(koX);
		document.getElementById("koD").innerHTML = 0;
		document.getElementById("koH").innerHTML = 0;
		document.getElementById("koM").innerHTML = 0;
		document.getElementById("koS").innerHTML = 0;
	}
}, 1000);