
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
  
  else if (mins >= 9) {
    return 'YES, ' + drankString();
  }
  
  else {
    while ((arr.length) >= mins) {
      arr.pop();
    }
    
    return "Sadly you don't have time for a PSL today, but " + drankString();
  }
}

//using BART API to find number of minutes until next train
var xhr;
xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  var mins;
  xmlDoc=xhr.responseXML;
  if (xhr.readyState==4 && xhr.status==200){
    //creates array of etd objects
    var k = xmlDoc.getElementsByTagName("etd");   
    //looping to use only the train lines that lead to Richmond
    for (var i = 0; i <k.length; i++) {   
      var abbr = (k[i].getElementsByTagName("abbreviation")[0].childNodes[0].
        nodeValue);
      if (abbr === "PITT") {
        mins = k[i].getElementsByTagName("minutes")[0].childNodes[0].nodeValue;
        mins = parseInt(mins);
        /** FIXME: Richmond line should be included by pushing its data into an
         * array along with the other data and then sorting it.  Right now it's
         * only using Pittsburg/BayPoint data.  Preliminary try below:
        departTimes.push(mins);
        departTimes.sort(function(a, b){
          return a-b;
          });
        mins = departTimes[0]
        */
        
        /**if number of minutes is less than time it takes to even run between 
         * trains, move to next viable estimated time of departure
         */
        if (mins <= 2 || isNaN(mins) === true) { 
          negativeMessage = " You couldn't make the next train even if you" + 
            " ran, so take your time!";
          mins = k[i].getElementsByTagName("minutes")[1].childNodes[0].nodeValue;
          mins = parseInt(mins); 
          document.getElementById("runTime").innerHTML= drankList(coffeeDranks, 
            mins) + negativeMessage + " The next viable train is leaving in " + 
            mins + " minutes.";
        }
        
        else
          document.getElementById("runTime").innerHTML= drankList(coffeeDranks, 
            mins) + ' The next train is leaving in ' + mins + ' minutes.';
        } 
      }
    }
    
  return mins;
};

xhr.open("GET","http://api.bart.gov/api/etd.aspx?cmd=etd&orig=embr&key=MW9S-E7SL-26DU-VV8V&dir=n",true);
xhr.send();