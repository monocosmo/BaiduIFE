function dec2bin(decNumber) {
	var output;
	var dec = Number(document.getElementById("dec-number").value);
	if (dec < 0) {
		output = "Invalid negative input";
	} else if (dec == 0) {
		output = "0";
	} else {
		var resisual = dec;
		output = "";
		while(resisual / 2 > 0){
			output = output + (resisual % 2);
			resisual = parseInt(resisual / 2);
		} 
	}
	document.getElementById("result").innerHTML = output;
}
