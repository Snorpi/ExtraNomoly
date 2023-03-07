// Get all the accordion buttons

const accordionButtons = document.querySelectorAll(".accordion");
// Loop through each button and attach a click event listener
accordionButtons.forEach(button => {
    
  button.addEventListener("click", function() {
    // Toggle the active class to highlight the button that was clicked
    this.classList.toggle("active");

    // Get the panel that is next to the button that was clicked
    const panel = this.nextElementSibling;

    // Toggle the panel's display property to show/hide it
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
// Get all the nested accordion buttons
const nestedAccordionButtons = document.querySelectorAll(".nested-accordion");

// Loop through each nested button and attach a click event listener
nestedAccordionButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Toggle the active class to highlight the button that was clicked
    this.classList.toggle("active3");

    // Get the panel that is next to the button that was clicked
    const panel = this.nextElementSibling;

    // Toggle the panel's display property to show/hide it
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
