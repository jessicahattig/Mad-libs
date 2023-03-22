window.addEventListener("load", function() {
  let form = document.querySelector("form");
  // we've accessed our button and story elements at the top level
  // of the window load event listener to reuse these elements
  // in multiple locations
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");

  // the original form submission event listener
  form.addEventListener("submit", function(event) {
    ...
    ...
    // we've updated our code to use the new story variable
    story.removeAttribute("class");

    // take note that we only need to call event.preventDefault();
    // once, even though there are 3 different event listeners for the 
    // form submission event
    event.preventDefault();
  });

  // new event listener for form submit event to show reset button
  form.addEventListener("submit", function() {
    reset.removeAttribute("class");
  }); 

  // new event listener for form submit event to show advertisement
  form.addEventListener("submit", function() {
    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");
  }); 

  // new event listener for click event on reset button to 
  // reset form values
  resetBtn.addEventListener("click", function() {
    story.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
});