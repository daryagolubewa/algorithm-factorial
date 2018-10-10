window.onload = function() {
	
	function getFactorial(number) {
		let factorial = 1;
		if(number == 0) {
			return 1;
		} else {
			while(number >= 1) {
				factorial = number * factorial
				number--; 
			}
		}

		console.log(factorial);

	}

	getFactorial(7);

}



