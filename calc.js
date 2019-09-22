function calculateAkanName() {
	var akanMaleNames = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

	var dob =  document.getElementById("dob").value; 
	var CC = dob.substring(0,2);
	var YY = dob.substring(2,4);
	var MM = dob.substring(5,7);
	var DD = dob.substring(8,10);
	var bday = new Date(dob);
	

	if (dob != ''){
var dayOfTheWeek = bday.getDay();

	var gender =  document.getElementById("gender").value; 
  	

  	if(gender =='male') {
  		alert ("Your Akan Name is..." + akanMaleNames[dayOfTheWeek]);
  	} 

  	if(gender =='female') {
  		alert("Your Akan name is..." + akanFemaleNames[dayOfTheWeek]);
  	} 

  	if(gender =='') {
  		alert("Please Enter your gender");
  	} 
  }

  else {
  	alert ("Please Enter Date of Birth");
  }
}