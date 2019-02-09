let name = prompt('enter your name');
let initialInvestment = prompt ('enter your investment amount');
let subsequentInvestment = prompt ('enter number of times you plan to put in the plan');
let estimatedInvestmentLater;

estimatedInvestmentLater = (initialInvestment * subsequentInvestment) ** 2;

alert('Congratulation '+ name + ', your estimated investment value is US$'+estimatedInvestmentLater + ' in 10 years - subject to market risks. Thank you.');

// input# and square it.

function myFunction() {
    document.getElementById('demo').innerHTML = 'Refresh to do new calculation. Thank you.';
}
