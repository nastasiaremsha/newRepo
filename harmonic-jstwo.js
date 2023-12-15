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
//let paragraphs = [...document.querySelectorAll('p')];
//pans =[];
//
//paragraphs.forEach(paragraph=> {
//	et htmString ='';
//	et 
//})

//AOS.init({
//  duration: 500,
//  easing: 'ease-out-quart',
//  once: true
//});
//$(document).ready(function() {
//  $(window).scroll(function() {
//    // Get the current scroll position
//    var scrollPosition = $(this).scrollTop();
//
//    // Get the offset of the text container
//    var containerOffset = $('.container').offset().top;
//
//    // Adjust this value to control when the text should start revealing
//    var revealOffset = 100;
//
//    // Check if the scroll position is below the container offset
//    if (scrollPosition > containerOffset - revealOffset) {
//      // If yes, reveal the text
//      $('.reveal-text').css('opacity', '1');
//    }
//  });
//});
document.addEventListener('DOMContentLoaded', function () {
      var revealText = document.querySelector('.reveal-text');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var revealPosition = revealText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > revealPosition) {
          revealText.style.opacity = 1;
          revealText.style.transform = 'translateY(0)';
        }
      }

 window.addEventListener('scroll', handleScroll);
    });
document.addEventListener('DOMContentLoaded', function () {
      var appearImage = document.querySelector('.pop-upimg');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = appearImage.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          appearImage.style.opacity = 1;
        }
      }

      window.addEventListener('scroll', handleScroll);
    });
document.addEventListener('DOMContentLoaded', function () {
      var appearImage = document.querySelector('.pop-upimgtwo');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = appearImage.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          appearImage.style.opacity = 1;
        }
      }

      window.addEventListener('scroll', handleScroll);
    });
document.addEventListener('DOMContentLoaded', function () {
      var appearImage = document.querySelector('.pop-upimgthree');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = appearImage.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          appearImage.style.opacity = 1;
        }
      }

  window.addEventListener('scroll', handleScroll);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var slideInText = document.querySelector('.slide-in-text');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = slideInText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          slideInText.style.transform = 'translateX(0)';
        }
      }

      window.addEventListener('scroll', handleScroll);
    });

   document.addEventListener('DOMContentLoaded', function () {
      var slideInText = document.querySelector('.slide-in-texttwo');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = slideInText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          slideInText.style.transform = 'translateX(0)';
        }
      }

      window.addEventListener('scroll', handleScroll);
    });

   document.addEventListener('DOMContentLoaded', function () {
      var slideInText = document.querySelector('.slide-in-textthree');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var appearPosition = slideInText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > appearPosition) {
          slideInText.style.transform = 'translateX(0)';
        }
      }

      window.addEventListener('scroll', handleScroll);
    });

document.addEventListener('DOMContentLoaded', function () {
      var revealText = document.querySelector('.reveal-texttwo');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var revealPosition = revealText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > revealPosition) {
          revealText.style.opacity = 1;
          revealText.style.transform = 'translateY(0)';
        }
      }

 window.addEventListener('scroll', handleScroll);
    });

document.addEventListener('DOMContentLoaded', function () {
      var revealText = document.querySelector('.story');

      function handleScroll() {
        var scrollPosition = window.scrollY;
        var revealPosition = revealText.offsetTop - window.innerHeight / 2;

        if (scrollPosition > revealPosition) {
          revealText.style.opacity = 1;
          revealText.style.transform = 'translateY(0)';
        }
      }

 window.addEventListener('scroll', handleScroll);
    });

