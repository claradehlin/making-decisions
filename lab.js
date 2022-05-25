////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

// let lovesCode = true

// if (lovesCode = true) {
//   console.log ("I love to code!")
// } 

// if (lovesCode = false) {
//   console.log ("Coding has its challenges.")
// }

// For problems 2-3 use the following lines of code:
// var amysAge = 29;
// var brittanisAge = 34;
// var amysBirthYear = 1986;
// var brittanisBirthYear = 1956;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

// if (amysAge > brittanisAge) {
//   console.log ('Amy is older')
// } else if (brittanisAge > amysAge){
//   console.log ('Brittani is older')
// } else {
//   console.log ('They are the same age.')
// }

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

// if (amysBirthYear === brittanisBirthYear) {
//   console.log ('Amy & Brittani were born in the same year')
// } else {
//   console.log ('Amy & Brittani were not born in the same year')
// }

////////// PROBLEM 4 //////////

// let temperature = 65;
// let rain = false;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

// if (rain === true && temperature > 80){
//   console.log ("You should wear a t-shirt and take an umbrella.")
// } else if (rain === true && temperature <= 80 && temperature >= 60){
//   console.log ("You should wear a rain-jacket.")
// } else if (rain === true && temperature < 60) {
//   console.log ("You should wear a jacket and carry an umbrella.")
// } else if (rain === false && temperature > 80) {
//   console.log ("You should wear a tank top, shorts, a bucket hat and bring water with you or else you might die of heatstroke :-/")
// } else if (rain === false && temperature <= 80 && temperature >= 60){
//   console.log ("You should be stoked because it is perfect weather. Dress in your favorite outfit and probably wear dinosaur socks.")
// } else if (rain === false && temperature < 60) {
//   console.log ("It be chilly! Wear a warm sweater and a hat to keep your ears warm.")
// }

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

// for (let i = 0; i < 10; i++){
//   console.log('hello');
// }

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

////////// PROBLEM 8 //////////

// let score = 4;
// let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

// while (score < passingScore){
//   console.log('Your score is not high enough')
//   score ++
// }

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

// let changeMyMind = false
// if (changeMyMind === true){
//   console.log ('false')
// }
// if (changeMyMind === false){
//   console.log ('true')
// }

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).



////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
