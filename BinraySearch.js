/*
* This program uses binary search to find numbers inputted by the user.
*
* @author  Wajd Mariam
* @version 1.0
* @since   2021/01/28
*/


const prompt = require('prompt-sync')({sigint: true});

// This function uses binary search to search an array for a specific number
function binarySearch(userArray, userNumber) {
  // Declaring variables to help in the search
  let lowIndex = 0;
  let highIndex = userArray.length - 1;
  let middleIndex = 0;

  // Loop that keeps reducing search range until number is found or not found
  while (lowIndex <= highIndex) {
    middleIndex  = Math.floor((lowIndex + highIndex) / 2);
    if (userNumber > userArray[middleIndex]) {
      lowIndex = middleIndex + 1;
    } else if (userNumber < userArray[middleIndex]) {
      highIndex = middleIndex - 1;
    } else {
      // Returning the index spot of the number in the array
      let answer = middleIndex;
      return answer;
    }
  }
  // Returning that the number could not be found in the array
  return "Number Not Found";
}

// This function sorts an array and passes it back to the user
function sort(array) {
  // Sorting the array
  for (let arrayCounter = 0; arrayCounter < array.length; arrayCounter++) {
    for (let sortCounter = arrayCounter + 1; sortCounter < array.length; 
         sortCounter++) {
      if (array[arrayCounter] > array[sortCounter]) {
        let swapNumber = array[sortCounter];
        array[sortCounter] = array[arrayCounter];
        array[arrayCounter] = swapNumber;
      }
    }
  }
  // Returning newly sorted array
  return array;
}

try {
  // Initializing the array of random numbers
  let randomNumberArray = new Array(25);

  // Adding random numbers to the array
  for (let counter = 0; counter < randomNumberArray.length; counter++) {
    randomNumberArray[counter] = Math.floor(Math.random() * 100);
  }
  
  // Printing the current array with random numbers:
  let printList1 = "Array of Numbers: ";
      for (let printCounter1 = 0; printCounter1 < randomNumberArray.length; 
           printCounter1++) {
        printList1 = printList1 + randomNumberArray[printCounter1] + ", ";
      }
  console.log(printList1);
  console.log(``);

  // Sorting the array
  var numberArray = sort(randomNumberArray);

  // User input for what number they want to search for
  console.log("Enter a number you wish to find in the list: ");
  const inputNumber = prompt("");
  console.log();

  // Ensuring the user input is valid
  if (isNaN(inputNumber) == true) {
    // Throwing an error
    throw "ERROR: Invalid Input";
  } else {
    // Ensuring user inputs a number in the specified range
    if (inputNumber < 0 || inputNumber > 100) {
      // Throwing an error
      throw "ERROR: Invalid Input";
    } else {
      // Printing out each value in the array
      let printList = "Sorted Array of Numbers: ";
      for (let printCounter = 0; printCounter < numberArray.length; 
           printCounter++) {
        printList = printList + numberArray[printCounter] + ", ";
      }
      console.log(printList);

      // Using binary search to find the user's chosen number in the array
      let searchResult = binarySearch(numberArray, inputNumber);

      // Outputting the results of the search
      console.log();
      console.log("Your number is in index:", searchResult);
    }
  }
  // Catches and tells the user what error occurred
} catch (err) {
  console.log("ERROR: Your number wasn't found");
}