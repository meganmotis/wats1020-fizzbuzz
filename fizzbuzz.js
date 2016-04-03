// Place your FizzBuzz code here. 
// Count numbers 1 through 20 and determine if each number is divisible by 3, 5, or both
for (i=1; i<=20; i++) {
// For each number 1 through 20, do the following check
	// See if number is divisible by 3
	if (i % 3 === 0) {
		if (i % 5 === 0) {
		// If so, see if number is also divisible by 5
			console.log('FizzBuzz');
			document.write('FizzBuzz');
			document.write('<br/>');
			// If so, print Fizz Buzz
		} else console.log('Fizz');
			document.write('Fizz');
			document.write('<br/>');
		// If number is only divisible by 3, print Fizz
	} else if (i % 5 === 0) {
	// See if number if divisible by 5
		console.log('Buzz');
		document.write('Buzz');
		document.write('<br/>');
		// If so, print Buzz
	} else {
		// See if number is not divisible by 3 or 5
		// If so, print number
		console.log(i);
		document.write(i);
		document.write('<br/>');
	}
} 