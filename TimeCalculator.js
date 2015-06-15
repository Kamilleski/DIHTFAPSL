var minTime = 4; //one minute each way up and down the escalators, grabbing drink, paying, through the turnstiles, etc

var bartTime = 9; //MUST CHANGE TO API THING
var drankTime = bartTime - minTime;
//list of drinks in order of how long they take to prepare, +1 minute for each.
var coffeeDranks = ["a coffee", "an iced coffee", "a cafe au lait", "a cafe latte", "a pumpkin spice latte"];



//creating a string with the list of what drinks you could have based on the times
var drankList = function(arr) {
  var drankString = function() {
      var stringy = arr.join(", or ");
      return "you have time to grab " + stringy + "!";
  };
  if (bartTime <= 3) {
    return "Nonono! You barely have time to make it, let alone get a drink!";
  }
  else if (bartTime >= 9) {
    return "YES, " + drankString();
  }
  else {
    while ((arr.length + 1) >= bartTime) {
      arr.pop();
    }
    return "Sadly you don't have time for a PSL today, but " + drankString();
    
    
  }
  
};
document.write(drankList(coffeeDranks));
document.write("  The next train is leaving in " + bartTime + " minutes.");