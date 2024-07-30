// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
    return (9 * fahren / 5 + 32);
 }
 
 /**
  * Takes both numbers (F, C) and display a message with
  * both numbers and how that temp makes you feel using
  * this chart
  *
  *   Temp      Feels
  * ---------|----------
  *   < 32   |  "very cold"
  *   < 64   |  "cold"
  *   < 86   |  "warm"
  *   < 100  |  "hot"
  *
  * @param {number} fahren
  * @param {number} celc
  *//**function message(yards, meters) {
     let message = "";
     const yards = yards * 1;
 
 if (yards === 1760) {
     message = "thats as long as a mile!"
 } else if(yards === 100) {
     message = "thats as long as a football field."
 } else if(yards === 26) {
     message = "thats as long as a tennis court"
 } else if(yards === 1) {
     message = "thats as long as a washing machine"
 }
 
 } */
 function createMessage(fahren, celc){
 let createMessage = "";
 
 if (fahren * 1 <= 32 ) {
    createMessage = "very cold"
 } else if (fahren * 1 <= 64 ) {
    createMessage = "cold"
 } else if (fahren * 1 <= 86 ) {
    createMessage = "warm"
 } else if (fahren * 1 <= 100) {
    createMessage = "hot"
 }
 }
 
 /**
  * Takes a number and returns a random integer from 0 to the limit
  * @param {number} limit
  * @returns {number} a number between 0 and the int passed in
  */
 function rand(limit) {
 
 }
 
 // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
 
 let fahren = prompt(
   "enter a number, we will convert that number from fahrenheit to celcius"
 );
 let celc = convertToCelsius(fahren);
 let output = createMessage(fahren, celc);
 console.log(output);
 
 fahren = prompt(
   "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
 );
 celc = convertToCelsius(fahren);
 output = createMessage(fahren, celc);
 console.log(output);
 
 fahren = rand(110);
 celc = convertToCelsius(fahren);
 output = createMessage(fahren, celc);
 console.log(output);
 
 fahren = rand(110);
 celc = convertToCelsius(fahren);
 output = createMessage(fahren, celc);
 console.log(output);
 