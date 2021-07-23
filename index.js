/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  // input: animals is an array of objects
  // output: return a number that respresents the total animal 'count'
  //         return 0 if the array is empty

  // problem: how can we add up each of the 'count' key of each animal in the 
  // solution: 1. Loop 2. += arthmetic operator 
  // variable: declare a variable called total animal count and assign it to the default value, 0
  let totalAnimalCount = 0;
  // loop through the animals array of objects
  for (let i = 0; i < animals.length; i++) {
    // declare a variable called animal and assign it an index from the array
    const animal = animals[i];
    // reaasign the total animal count by assessing the count in each object 
    totalAnimalCount += animal.count
  }
  // return the the total animal count
  return totalAnimalCount;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  // input: animals is a array of objects
  // output: return an array of strings where each string is a kind of animal

  // problem: how can we push the value of the key: kind into an empty array?
  // solution: 1. loop 2. .push() into an empty array
  // variable: declare a variable cache array and assign it an empty string
  let cacheArr = []
  // loop through the animals array
  for (let i = 0; i < animals.length; i++) {
      // declare a variable called animal and assign it an index from the array
      const animal = animals[i]
      // push the value of the key: kind into the cache array 
      cacheArr.push(animal.kind)
  }

  // return the array of strings 
  return cacheArr;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  // input: animals in an array of objects and 
  //        minimum is a number that represent the lowest count of animals to include
  // output: return an array of objects that have a count equal to or greater than the minimum

  // problem: how can I filter out the animals array to one get animals that have a count equal to or greater than the minimum
  // solution: 1. loop 2. >= arthmetic operator 3. if conditional statement 3. otherwise return an empty arr
  // declare a variable cacheArr and assign it an empty array
  let cacheArr = []
  // loop through the animals array
  for (let i = 0; i < animals.length; i++) {
      // declare a variable called animal and assign it an index from the array
      const animal = animals[i]
      // if the animal 'count' is greater than or equal to minimum
      if (animal.count >= minimum) {
         // return the array with objects that are greater than or equal to minimum
         cacheArr.push(animal)
      }
  }
  
  // return the array of objects or an empty arr
  return cacheArr
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
