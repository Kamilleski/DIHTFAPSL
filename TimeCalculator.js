
/*one minute each way up and down the escalators, grabbing drink, paying, 
through the turnstiles, etc*/
var minTime = 4; 

//list of drinks in order of how long they take to prepare, +1 minute for each.
var coffeeDranks = ['a coffee', 'an iced coffee', 'a cafe au lait', 
  'a cafe latte', 'a pumpkin spice latte'];

//creating a string with the list of what drinks you could get based on the times
function drankList(arr, mins) {
  function drankString() {
      var stringy = arr.join(', or ');
      return 'you have time to grab ' + stringy + '!';
  }
  
  if (mins <= 3) {
    return 'Nonono! You barely have time to make it, let alone get a drink! ' + 
      'Run, girl!';
  }
  
  else if (mins >= 7) {
    return 'YES, ' + drankString();
  }
  
  else {
    while ((arr.length + 1) >= mins) {
      arr.pop();
    }
    
    return "Sadly you don't have time for a pumpkin spice latte today, but " + 
      drankString();
  }
}

//using BART API to find number of minutes until next train
var xhr;
xhr = new XMLHttpRequest();

//defining function to be used later so it won't be defined inside a loop
function sortNumber(a,b) {
    return a - b;
}


var departTimes = [];

//parses XML to find individual etd times and pushes them into an array
xhr.onreadystatechange = function() {
  var mins;
  xmlDoc=xhr.responseXML;
  if (xhr.readyState==4 && xhr.status==200){
    //creates array of etd objects
    var etd = xmlDoc.getElementsByTagName("etd");   
    //looping to use only the train lines that lead to Richmond
    for (var i = 0; i <etd.length; i++) {   
      var abbr = (etd[i].getElementsByTagName("abbreviation")[0].childNodes[0].
        nodeValue);
      if (abbr === "PITT") {
        mins = etd[i].getElementsByTagName("minutes")[0].childNodes[0].nodeValue;
        mins = parseInt(mins);
        departTimes.push(mins);
      }
      else if (abbr === "RICH") {
        mins = etd[i].getElementsByTagName("minutes")[0].childNodes[0].nodeValue;
        mins = parseInt(mins);
        departTimes.push(mins);
      }

      departTimes.sort(sortNumber);
      mins = departTimes[0];
      
        /**if number of minutes is less than time it takes to even run between 
         * trains, move to next viable estimated time of departure
         */
        if (mins <= 2 || isNaN(mins) === true ) { 
          negativeMessage = " You couldn't make the next train even if you" + 
            " ran, so take your time!";
          mins = departTimes[1];
          document.getElementById("runTime").innerHTML= drankList(coffeeDranks, 
            mins) + negativeMessage + " The next viable train is leaving in " + 
            mins + " minutes.";
        }
        
        else {
          document.getElementById("runTime").innerHTML= drankList(coffeeDranks, 
            mins) + ' The next train is leaving in ' + mins + ' minutes.';
        }
      } 
    }
    
  return mins;
};

xhr.open("GET","http://api.bart.gov/api/etd.aspx?cmd=etd&orig=embr&key=MW9S-E7SL-26DU-VV8V&dir=n",true);
xhr.send();