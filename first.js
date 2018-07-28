// first.js
var colorCodes = {

  back  : "#fff",
  front : "#888",
  side  : "#369"

};


function login() {
	var username;
	var password;

	// body...
	
	username=document.getElementById("username");
	password=document.getElementById("password");
	if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", username.value);
	  localStorage.setItem("password", password.value);
    // Retrieve
    //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
	 
	
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));
	window.open("welcome.html");
}