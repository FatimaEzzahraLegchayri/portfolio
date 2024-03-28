const front = document.getElementById('btn-f')
const popUp = document.getElementById('skill-conatiner-front')

// ///////////////////////////show content when hover & dont when click ///////////////////////////////////
let isContentShown = false;

// Add event listener for button click
front.addEventListener("click", function() {
  if (!isContentShown) {
    // Show the text
    popUp.style.display = "block";
    isContentShown = true;
  } else {
    // Hide the text
    popUp.style.display = "none";
    isContentShown = false;
  }
});

const back =document.getElementById('btn-b')
const show = document.getElementById('skill-conatiner-back')
back.addEventListener("click", function() {
    if (!isContentShown) {
      // Show the text
      show.style.display = "block";
      isContentShown = true;
    } else {
      // Hide the text
      show.style.display = "none";
      isContentShown = false;
    }
});

// ///////////////////////////////////////////////////////////// contact ////////////////////////////////////////////////
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Your code to handle form submission, such as sending the data to a server
    
//     // Display success message
//     document.getElementById("success-message").style.display = "block";
    
//     // Reset form fields
//     document.getElementById("contact-form").reset();
//   });
  
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
