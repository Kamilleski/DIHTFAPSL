//get basic data from user


var age = prompt('What is your age in years?');
var height = prompt('What is your height in centimeters?');
var weight = prompt('What is your weight in kilograms?');
var sex = prompt("Enter 'F' or 'M' depending on which sex you identify with.");

//turn inputs into usable data
age = parseInt(age, 10);
height = parseInt(height, 10);
weight = parseInt(weight, 10);

//declare values for following equation
var recCalories;
var percentage;

//calculates how many calories you just threw away, not including whip     
function calCalculator() {
if (sex === 'F' || sex === 'f') {
  recCalories = Math.floor(1.375 * ((447.593 + (9.247 * weight) + (3.098 * height)) - (4.330 * age)));
  percentage = Math.floor(375 / recCalories);
  alert('You just ate ' + percentage + '% of your daily recommended ' + recCalories + ' calories!');
}
else if (sex === 'M' || sex === 'm') {
  recCalories = Math.floor(1.375 * ((88.362 + (13.397 * weight) + (4.799 * height)) - (5.677 * age)));
  percentage = Math.floor(100 * (375 / recCalories));
  alert('You just ate ' + percentage + '% of your daily recommended ' + recCalories + ' calories!');
}
}

