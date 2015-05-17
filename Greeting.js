//getting time of day for initial greeting

var d = new Date();
var hour = d.getHours();
 
//setting greeting based on time of day received
var greeting;
if (hour <  12 && hour >= 0) {
  greeting = "Good morning!";
}
else if (hour <= 18) {
  greeting = "Good afternoon!";
}
else {
  greeting = "Good evening!";
}
