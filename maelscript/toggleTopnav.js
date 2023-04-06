function toggleTopnav() {
  var scrollable = document.getElementById("scrollable");
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
	scrollable.className = "scrollable";
  } else {
    x.className = "topnav";
	scrollable.className = "";
	hideall();
  }
  
  var dropdown = document.getElementById("download-container");
  if (dropdown.style.display === "block"){
	dropdown.style.display = "none";
  }
  
}