// Basic smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form submission handling (client-side validation example)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add validation or AJAX form submission logic here
    alert('Thank you for your message!');
  });


  // Array of background images
const heroImages = [
    'hero1.jpg',
    'hero2.jpg',
    'hero3.jpg'
    // Add more image paths as needed
  ];
  
 // Function to set a random background image for the hero section
function setRandomHeroBackground() {
    const homeSection = document.getElementById('home');
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    const selectedImage = heroImages[randomIndex];
  
    // Set the background style with the chosen image
    homeSection.style.background = `url('${selectedImage}') center center / cover no-repeat`;
  }
  
  // Change background every 2 seconds
  document.addEventListener('DOMContentLoaded', function() {
    // Initially set a background immediately
    setRandomHeroBackground();
    
    // Set interval to change background every 2000 milliseconds (2 seconds)
    setInterval(setRandomHeroBackground, 2000);
  });


  // Function to animate text letter by letter
// Function to animate text letter by letter
function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }
  
  // Function to run the typewriter effect for both lines and loop it
  function runTypewriterEffect() {
    // Define the text lines to animate
    const text1 = "Building robust Java applications and dynamic Angular interfaces";
    const text2 = "Passionate about innovation and solving real-world problems";
  
    // Get the target elements
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    
    // Clear any previous text
    line1.innerHTML = "";
    line2.innerHTML = "";
    
    // Start the typewriter effect for the first line
    typeWriter(line1, text1, 50, function() {
      // After a short delay, animate the second line
      setTimeout(function() {
        typeWriter(line2, text2, 50, function() {
          // After both lines complete, wait a moment then restart the effect
          setTimeout(runTypewriterEffect, 2000);
        });
      }, 500);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    runTypewriterEffect();
  });
  