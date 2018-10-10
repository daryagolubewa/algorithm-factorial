
	
	function getFactorial(number) {
		let factorial = 1;
		if(number == 0) {
			return 1;
		} else {
			while(number >= 1) {
				factorial *= number;
				number--; 
			}
		}

	}

	


	function getFactorial(number) {
		
		if(number == 0) {
			return 1;
		} else {
			return (number * getFactorial(number - 1));
		}
	}

	





