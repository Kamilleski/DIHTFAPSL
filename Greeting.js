
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
  TGIFMessage = "What the good-God-damn are you doing \nOUT\nOF\nBED\non the weekend?!";
}
else if (dayOfWeek > 1 || dayOfWeek <= 3) {
  TGIFMessage = "Only " + (5 - dayOfWeek) + " more days until Friday!\nYour hair looks great today, by the way.";
}
else if (dayOfWeek === 4) {
  TGIFMessage = "Tomorrow's Friday! You're almost there...";
}
else {
  TGIFMessage = "TGIF, BITCHES.\nYou deserve a drank.";
}

var totalGreeting = function(greet, message){
  return greet + "\n" + message;
};
totalGreeting(heyHoney(), TGIFMessage);
//console.logging until I figure out fucking HTML goddamnit shit fuck
//console.log(heyHoney());
//console.log(TGIFMessage);

//Practice doing all of this with a higher-order function