function showMessage() {

alert('Welcome to Money Game!');
}

showMessage();
showMessage();

//display welcome alert 2 times


function myFunction() {
let name = prompt('enter your name');
let initialInvestment = prompt ('enter your investment amount');
let subsequentInvestment = prompt ('enter number of times you plan to put in the plan');
let estimatedInvestmentLater;

estimatedInvestmentLater = (initialInvestment * subsequentInvestment) ** 2;

alert('Congratulation '+ name + ', your estimated investment value is US$'+estimatedInvestmentLater + ' in 10 years - subject to market risks. Thank you.');
}
// input# and square it.

function myFunctionTwo() {
let name = prompt('enter your name');
let expenses = prompt('enter your annual expenses in thousand dollars');
let retirementAmount;

retirementAmount = expenses * 30;

alert('You will need about USD '+ retirementAmount + ' (000) to retire')
}
// input# and double it. assuming rate of return of 100%.
