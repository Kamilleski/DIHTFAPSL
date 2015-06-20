function calCalculator(){
        
      var age = document.getElementById("age").value;
      var height = document.getElementById("height").value;
      var weight = document.getElementById("weight").value;
      var sex = document.getElementById("sex").value;
      
      //turn inputs into usable data
      age = parseInt(age, 10);
      height = parseInt(height, 10);
      weight = parseInt(weight, 10);
      
      //declare values for following equation
      var recCalories;
      var percentage;
      var calsInPSL = 375; //there are 375 calories in a large whole milk Peet's Pumpkin Spice Latte
        
        if (sex === 'F' || sex === 'f') {
          recCalories = Math.floor(1.375 * ((447.593 + (9.247 * weight) + (3.098 * height)) - (4.330 * age)));
        }
        
        else if (sex === 'M' || sex === 'm') {
          recCalories = Math.floor(1.375 * ((88.362 + (13.397 * weight) + (4.799 * height)) - (5.677 * age)));
        }
        
        percentage = Math.floor(100 * (calsInPSL / recCalories));
        document.getElementById("output").innerHTML= 'You just ate ' + percentage + '% of your daily recommended ' + recCalories + ' calories!';
        
        output = function() {
          if (event.keyCode == 13) {
          alert('You just ate ' + percentage + '% of your daily recommended ' + recCalories + ' calories!');
          }
        };
      }