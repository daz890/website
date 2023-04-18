

/* as you can see this was the foluma that checked for the answer the script caluclated this information on the pounds formula for both male and female i was 
going to add a formula for children for but everyone tends to have a similar formula but their is only 2 1 for male and 1 for female  */

function bmiCals() {
  function find(id) {
    return document.getElementById(id);}
  var age = find("age").value;
  var height = find("height").value;
  var weight= find("weight").value;
  var result = 0;
  if (find("male").checked) {
    result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age))}
  else if (find("female").checked) 
  result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age))
  find("bmiCals").innerHTML = result;
  }

function stonesCals() {
  function find(id) {
    return document.getElementById(id);}
  var age = find("age").value;
  var weight = find("weight").value;
  var height = find("height").value;
  var result = 0;
  var activityLevel = find("activity").options[find("activity").value];
  
  if (find("male").checked) {
    result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activityLevel; }
  
  else if (find("female").checked) 
  result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)) * activityLevel;
  find("stonesCals").innerHTML = result;
}







/* end of script */ 








