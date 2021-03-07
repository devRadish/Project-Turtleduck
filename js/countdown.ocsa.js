// Set the date we're counting down to 
var occountDownDate = new Date("Mar 25, 2021 10:00:00").getTime();

// Update the count down every 1 second
var ocx = setInterval(function() {

	// Get today's date and time
	var ocnow = new Date().getTime();

	// Find the distance between now and the count down date
  	var ocdistance = occountDownDate - ocnow;

  	// Time calculations for days, hours, minutes and seconds
 	var ocdays = Math.floor(ocdistance / (1000 * 60 * 60 * 24));
	var ochours = Math.floor((ocdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var ocminutes = Math.floor((ocdistance % (1000 * 60 * 60)) / (1000 * 60));
	var ocseconds = Math.floor((ocdistance % (1000 * 60)) / 1000);

	function pad(number, length) {

		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

	return str;

	}
	
	// Display the result in the element with id="countdown"
	document.getElementById("OCd").innerHTML = ocdays;
	document.getElementById("OCh").innerHTML = pad(ochours, 2);
	document.getElementById("OCm").innerHTML = pad(ocminutes, 2);
	document.getElementById("OCs").innerHTML = pad(ocseconds, 2);

	// If the count down is finished, write some text
	if (ocdistance < 0) {
		clearInterval(x);
		document.getElementById("OCd").innerHTML = 0;
		document.getElementById("OCh").innerHTML = 0;
		document.getElementById("OCm").innerHTML = 0;
		document.getElementById("OCs").innerHTML = 0;
		if (ocdistance > -10000) {
			confetti.start(10000, 400);
		} else {
			confetti.stop();
		}
	}
	}, 1000);