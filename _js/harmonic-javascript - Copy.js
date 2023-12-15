// JavaScript Document
// Get the hidden object
//const hiddenObject = document.getElementById('hidden-object');
//
//// Add a scroll event listener to the window
//window.addEventListener('scroll', function() {
//    // Calculate the scroll position
//    const scrollPosition = window.scrollY;
//
//    // Adjust this value based on when you want the object to appear
//    const triggerPosition = 200;
//
//    // Check if the scroll position is below the trigger position
//    if (scrollPosition > triggerPosition) {
//        // Make the object visible
//        hiddenObject.style.opacity = 1;
//    } else {
//        // Hide the object
//        hiddenObject.style.opacity = 0;
//    }
//});
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 550) {
    document.getElementById("myimg").className = "slideUp";
  }
	if (document.documentElement.scrollTop > 850) {
    document.getElementById("myimg").className = "fadeOut";
  }

  if (document.documentElement.scrollTop > 1050) {
    document.getElementById("myimgtwo").className = "slideUp";
  }
if (document.documentElement.scrollTop > 1450) {
    document.getElementById("myimgtwo").className = "fadeOut";
  }
 if (document.documentElement.scrollTop > 1050) {
    document.getElementById("myimgthree").className = "slideUp";
  }
if (document.documentElement.scrollTop > 1450) {
    document.getElementById("myimgthree").className = "fadeOut";
  }
if (document.documentElement.scrollTop > 650) {
    document.getElementById("myimgfour").className = "slideUp";
  }
if (document.documentElement.scrollTop > 850) {
    document.getElementById("myimgfour").className = "fadeOut";
  }
if (document.documentElement.scrollTop > 650) {
    document.getElementById("myimgfour").className = "slideUp";
  }
if (document.documentElement.scrollTop > 850) {
    document.getElementById("myimgfour").className = "fadeOut";
  }
if (document.documentElement.scrollTop > 850) {
    document.getElementById("myimgfive").className = "slideUp";
  }
if (document.documentElement.scrollTop > 1750) {
    document.getElementById("myimgfive").className = "fadeOut";
  }
if (document.documentElement.scrollTop > 850) {
    document.getElementById("myimgfive").className = "slideUp";
  }
if (document.documentElement.scrollTop > 1750) {
    document.getElementById("myimgfive").className = "fadeOut";
  }

}
