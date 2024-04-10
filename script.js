
// The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable 
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for 
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false == false); // Assuming a typo in the original task, replaced __ with == for logical correction
// console.log(e === 'Kevin');
// console.log(a + b > c);
// console.log(a * a == d);
// console.log(48 == '48');

/**** ****The farm    Today's work continues  */

// Declare a variable animal and set it to either "cow" or something else
// let animal = "goat"; // Change this to any other animal to see the different output

// // Check if the animal is a cow
// if (animal === "cow") {
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow.");
// }

/*   ****** Driver's Ed  *************   */

// Declare a variable that holds a person's age
// let personAge = 18; // You can change this value to test different outcomes

// // Check if the person is 16 years or older
// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }


/*   ******  II. Loops  More Assignments On 4:9: 2024  */

// Using let to initialize the loop variable
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

/*   ******** The Basics **********************  */

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

//?  ============ Arrays Definition

// const names = ['Okoye', 'ana', 'alex'];

// console.log(names);

// const movies = ['Caddyshack', 'Interstellar', 'Scarface'];

// console.log(movies);

// movies[0] = 'Batman';

// movies[3] = 'Toy Story';

// console.log(movies);

// movies[movies.length] = 'Fast 5';

// console.log(movies);

// // 
// let firstMovie = movies[0];
// console.log(firstMovie);


// movies[10] = 'Shrek';

// movies[0] = 'Batman';
// movies.length = 0;

// console.log(movies);
// for (let movie of movies) {
//     console.log(movie.toLowerCase());

//     if (movie.toLowerCase() === 'Toy Story'.toLowerCase()) {
//         console.log(`Now playing ${movie}`);
//     }
// }

// Constants
// const tripDistance = 1500; // miles
// const fuelBudget = 175; // dollars
// const fuelCostPerGallon = 3; // dollars

// // Fuel efficiency at different speeds (miles per gallon)
// const efficiencyAt55mph = 30;
// const efficiencyAt60mph = 28;
// const efficiencyAt75mph = 23;

// // Calculate the number of gallons needed and the cost for each speed
// function calculateFuelRequirements(speed, efficiency) {
//     const gallonsNeeded = tripDistance / efficiency;
//     const totalCost = gallonsNeeded * fuelCostPerGallon;
//     return { gallonsNeeded, totalCost };
// }

// // Calculate for 55mph
// const fuelAt55mph = calculateFuelRequirements(55, efficiencyAt55mph);
// console.log(`At 55 mph: ${fuelAt55mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt55mph.totalCost.toFixed(2)}`);
// console.log(`Within budget at 55 mph: ${fuelAt55mph.totalCost <= fuelBudget}`);

// // Calculate for 60mph
// const fuelAt60mph = calculateFuelRequirements(60, efficiencyAt60mph);
// console.log(`At 60 mph: ${fuelAt60mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt60mph.totalCost.toFixed(2)}`);
// console.log(`Within budget at 60 mph: ${fuelAt60mph.totalCost <= fuelBudget}`);

// // Calculate for 75mph
// const fuelAt75mph = calculateFuelRequirements(75, efficiencyAt75mph);
// console.log(`At 75 mph: ${fuelAt75mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt75mph.totalCost.toFixed(2)}`);
// console.log(`Within budget at 75 mph: ${fuelAt75mph.totalCost <= fuelBudget}`);

    //  /// Part 2: Practical Math

// function calculateTripCostsAndTime(distance, speeds, fuelEfficiencies, budget, fuelCost) {
//     // Store results for each speed
//     let results = [];

//     speeds.forEach((speed, index) => {
//         const fuelEfficiency = fuelEfficiencies[index];
//         const gallonsNeeded = distance / fuelEfficiency;
//         const cost = gallonsNeeded * fuelCost;
//         const time = distance / speed;
//         const withinBudget = cost <= budget;

//         results.push({
//             speed,
//             gallonsNeeded,
//             cost,
//             time,
//             withinBudget
//         });
//     });

//     return results;
// }

// function logResults(results) {
//     results.forEach(result => {
//         console.log(`At ${result.speed} mph:`);
//         console.log(`- Gallons of fuel needed: ${result.gallonsNeeded.toFixed(2)}`);
//         console.log(`- Total fuel cost: $${result.cost.toFixed(2)}`);
//         console.log(`- Trip duration: ${result.time.toFixed(2)} hours`);
//         console.log(`- Within budget: ${result.withinBudget ? 'Yes' : 'No'}`);
//         console.log('-----------------------------------');
//     });
// }

// function findBestOption(results) {
//     // Sort by cost, then by time
//     const sorted = results.sort((a, b) => a.cost - b.cost || a.time - b.time);
//     const bestOption = sorted[0];
//     console.log(`Best option: Travel at ${bestOption.speed} mph`);
// }

// // Constants
// const distance = 1500; // in miles
// const speeds = [55, 60, 75]; // in mph
// const fuelEfficiencies = [30, 28, 23]; // in mpg
// const budget = 175; // in dollars
// const fuelCost = 3; // in dollars per gallon

// // Calculate and log the results
// const results = calculateTripCostsAndTime(distance, speeds, fuelEfficiencies, budget, fuelCost);
// logResults(results);

// // Find and log the best option
// findBestOption(results);

// Constants
const tripDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars

// Fuel efficiency at different speeds (miles per gallon)
const efficiencyAt55mph = 30;
const efficiencyAt60mph = 28;
const efficiencyAt75mph = 23;

// Calculate the number of gallons needed and the cost for each speed
function calculateFuelRequirements(speed, efficiency) {
    const gallonsNeeded = tripDistance / efficiency;
    const totalCost = gallonsNeeded * fuelCostPerGallon;
    return { gallonsNeeded, totalCost };
}

// Calculate for 55mph
const fuelAt55mph = calculateFuelRequirements(55, efficiencyAt55mph);
console.log(`At 55 mph: ${fuelAt55mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt55mph.totalCost.toFixed(2)}`);
console.log(`Within budget at 55 mph: ${fuelAt55mph.totalCost <= fuelBudget}`);

// Calculate for 60mph
const fuelAt60mph = calculateFuelRequirements(60, efficiencyAt60mph);
console.log(`At 60 mph: ${fuelAt60mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt60mph.totalCost.toFixed(2)}`);
console.log(`Within budget at 60 mph: ${fuelAt60mph.totalCost <= fuelBudget}`);

// Calculate for 75mph
const fuelAt75mph = calculateFuelRequirements(75, efficiencyAt75mph);
console.log(`At 75 mph: ${fuelAt75mph.gallonsNeeded.toFixed(2)} gallons needed, cost: $${fuelAt75mph.totalCost.toFixed(2)}`);
console.log(`Within budget at 75 mph: ${fuelAt75mph.totalCost <= fuelBudget}`);