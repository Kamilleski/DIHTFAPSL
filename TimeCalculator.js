
//one minute each way up and down the escalators, grabbing drink, paying, through the turnstiles, etc
var minTime = 4; 

//list of drinks in order of how long they take to prepare, +1 minute for each.
var coffeeDranks = ['a coffee', 'an iced coffee', 'a cafe au lait', 'a cafe latte', 'a pumpkin spice latte'];



//creating a string with the list of what drinks you could have based on the times
function drankList(arr, mins) {
  function drankString() {
      var stringy = arr.join(', or ');
      return 'you have time to grab ' + stringy + '!';
  }
  if (mins <= 3) {
    return 'Nonono! You barely have time to make it, let alone get a drink! Run, girl!';
  }
  else if (mins >= 9) {
    return 'YES, ' + drankString();
  }
  else {
    while ((arr.length + 1) >= mins) {
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
    var k = xmlDoc.getElementsByTagName("etd"); //creates an array of etd objects
    for(var i = 0; i <k.length; i++) { //looping to use only the lines that lead to Richmond
      var abbr = (k[i].getElementsByTagName("abbreviation")[0].childNodes[0].nodeValue);
      if (abbr === "PITT") {
        mins = xmlDoc.getElementsByTagName("minutes")[0].childNodes[0].nodeValue;
        mins = parseInt(mins);
        if (mins <= 2) { //if number of minutes is less than time it takes to even run between trains, move to next viable etd
          mins = xmlDoc.getElementsByTagName("minutes")[1].childNodes[0].nodeValue;
          mins = parseInt(mins); 
          document.getElementById("runTime").innerHTML= "You couldn't make the next train even if you ran, so take your time! " + drankList(coffeeDranks, mins) + " The next viable train is leaving in " + mins + " minutes.";
        }
        else
          document.getElementById("runTime").innerHTML= drankList(coffeeDranks, mins) + ' The next train is leaving in ' + mins + ' minutes.';
        } 
      }
    }
  return mins;
};

//xhr.open("GET", "BARTAPI.xml", true);
xhr.open("GET","http://api.bart.gov/api/etd.aspx?cmd=etd&orig=embr&key=MW9S-E7SL-26DU-VV8V&dir=n",true);
xhr.send();


//list of drinks in order of how long they take to prepare, +1 minute for each.


//invoking function and writing results of js to the main html page