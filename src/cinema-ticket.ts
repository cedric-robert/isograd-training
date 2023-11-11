/*******
 * Read input from STDIN
 * Use: console.log() to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

let input = [];

readline_object.on('line', (value) => {
  // Read input values
  input.push(value);
});

// Call ContestResponse when all inputs are read
readline_object.on('close', ContestResponse);

function ContestResponse() {
  input = input.map((valStr) => +valStr);

  // implement your code here using input array
  console.error('input', input);

  const [priceIndiv, priceTen, nbClient] = input;

  const nbClientRounded = Math.ceil(nbClient / 10) * 10;
  console.error('nbClientRounded', nbClientRounded);

  console.log(Math.min((nbClientRounded / 10) * priceTen, priceIndiv * nbClient));
}
