/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 35; // Default cost per day
let numOfDays = 0;
let selectedDays = [];

document.addEventListener("DOMContentLoaded", function () {
  // Initialization code goes here, if needed

  /********* colour change days of week *********/
  // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
  // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here.
  const dayButtons = document.querySelectorAll(".day-selector li");

  dayButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const day = button.id;

      if (!selectedDays.includes(day)) {
        selectedDays.push(day);
        numOfDays++;
      } else {
        const index = selectedDays.indexOf(day);
        selectedDays.splice(index, 1);
        numOfDays--;
      }

      // Toggle "clicked" class
      button.classList.toggle("clicked");

      // Recalculate total cost
      calculateCost();
    });
  });

  /********* clear days *********/
  const clearButton = document.getElementById("clear-button");

  clearButton.addEventListener("click", function () {
    // Reset variables and clear "clicked" class from all days
    selectedDays = [];
    numOfDays = 0;

    dayButtons.forEach(function (button) {
      button.classList.remove("clicked");
    });

    // Reset calculated cost
    calculateCost();
  });

  /********* change rate *********/
  const halfDayButton = document.getElementById("half");
  const fullDayButton = document.getElementById("full");

  halfDayButton.addEventListener("click", function () {
    // Your code for changing rate to $20, updating classes, and recalculating cost goes here
    costPerDay = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
  });

  fullDayButton.addEventListener("click", function () {
    // Your code for changing rate to $35, updating classes, and recalculating cost goes here
    costPerDay = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
  });

  /********* calculate *********/
  // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
  function calculateCost() {
    const totalCost = costPerDay * numOfDays;
    document.getElementById("calculated-cost").innerHTML = totalCost;
  }
});
