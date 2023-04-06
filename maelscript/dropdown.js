var dropdown = document.getElementsByClassName("dropdown-btn");
var links = document.getElementsByTagName("a");
var containers = document.getElementsByClassName("dropdown-container");
var scrollable = document.getElementById("scrollable");
var nav = document.getElementById("myTopnav");
var toggle = document.getElementById("nav-toggle");
var i;


function hideall() {
		for (i = 0; i < containers.length; i++) {
			if (containers[i].style.display === "block") {
			  containers[i].style.display = "none";
			}
		}
		nav.className = "topnav";
		scrollable.className = "";
		toggle.classList.remove("change")
	}
function hide(ele) {
		for (i = 0; i < containers.length; i++) {
			if (containers[i] != ele && containers[i].style.display === "block") {
			  containers[i].style.display = "none";
			}
		}
	}

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
	this.firstElementChild.classList.toggle("fa-caret-down");
	this.firstElementChild.classList.toggle("fa-caret-up");
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
	hide(dropdownContent)
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}




for (i = 0; i < links.length; i++) {
	links[i].addEventListener("click", hideall);
}