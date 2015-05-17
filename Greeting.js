//getting time of day for initial greeting

var d = new Date();
var hour = d.getHours();
var watchTime = d.toLocaleTimeString();

//setting greeting based on time of day received
var greeting;
var heyHoney = function() {
  if (hour < 12 && hour >= 0) {
    greeting = "Good morning" ;
  }
  else if (hour <= 18) {
    greeting = "Good afternoon";
  }
  else {
    greeting = "Good evening";
  }
return greeting + ", honey! The time is " + watchTime + ".";
};


//setting a countdown to Friday to keep the spirits of the basic bitches up
var dayOfWeek = d.getDay();
var TGIFMessage;
if (dayOfWeek === 0 || dayOfWeek === 6) {
  TGIFMessage = "What the good-God-damn are you doing out of bed on the weekend?!";
}
else if (dayOfWeek >= 1 || dayOfWeek <= 3) {
  TGIFMessage = "Only " + (5 - dayOfWeek) + "more days until Friday!";
}
else if (dayOfWeek === 4) {
  TGIFMessage = "Tomorrow's Friday! You're almost there...";
}
else {
  TGIFMessage = "TGIF, BITCHES.";
}

console.log(heyHoney());
console.log(TGIFMessage);