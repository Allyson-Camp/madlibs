// onload cunction
window.addEventListener("load", function () {
    //get the form element and set it = to "form"
    let form = document.querySelector("form");
    let resetBtn = document.querySelector("button#reset");
    let story = document.querySelector("div#story");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const person1Input = document.getElementById("person1Input").value;
        const person2Input = document.getElementById("person2Input").value;
        const animalInput = document.getElementById("animalInput").value;
        const exclamationInput =
            document.getElementById("exclamationInput").value;
        const verbInput = document.getElementById("verbInput").value;
        console.log("verbInput = " + verbInput);
        const nounInput = document.getElementById("nounInput").value;

        document.querySelector("span#person1a").innerText = person1Input;
        document.querySelector("span#person1b").innerText = person1Input;
        document.querySelector("span#person1c").innerText = person1Input;
        document.querySelector("span#person2a").innerText = person2Input;
        document.querySelector("span#person2b").innerText = person2Input;
        document.querySelector("span#animal").innerText = animalInput;
        document.querySelector("span#verb").innerText = verbInput;
        document.querySelector("span#noun").innerText = nounInput;
        document.querySelector("span#exclamation").innerText = exclamationInput;

        story.removeAttribute("class");
    });

    // new event listener for form submit event to show reset button
    form.addEventListener("submit", function () {
        reset.removeAttribute("class");
    });

    // new event listener for form submit event to show advertisement
    form.addEventListener("submit", function () {
        window.alert(
            "Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!"
        );
    });

    // new event listener for click event on reset button to
    // reset form values
    resetBtn.addEventListener("click", function () {
        story.setAttribute("class", "hidden");
        document.getElementById("person1Input").value = null;
        document.getElementById("person2Input").value = null;
        document.getElementById("animalInput").value = null;
        document.getElementById("exclamationInput").value = null;
        document.getElementById("verbInput").value = null;
        document.getElementById("nounInput").value = null;
    });
});

// example of rearranging the code:
// UI Logic
// function getAndSetMadLibValues() {
//   const person1Input = document.getElementById("person1Input").value;
//   const person2Input = document.getElementById("person2Input").value;
//   const animalInput= document.getElementById("animalInput").value;
//   const exclamationInput = document.getElementById("exclamationInput").value;
//   const verbInput = document.getElementById("verbInput").value;
//   const nounInput = document.getElementById("nounInput").value;

//   document.querySelector("span#person1a").innerText = person1Input;
//   document.querySelector("span#person1b").innerText = person1Input;
//   document.querySelector("span#person1c").innerText = person1Input;
//   document.querySelector("span#person2a").innerText = person2Input;
//   document.querySelector("span#person2b").innerText = person2Input;
//   document.querySelector("span#animal").innerText = animalInput;
//   document.querySelector("span#verb").innerText = verbInput;
//   document.querySelector("span#noun").innerText = nounInput;
//   document.querySelector("span#exclamation").innerText = exclamationInput;
// }

// // this function creates the onsubmit event handler
// // it needs to be called in the window.onload event handler
// function setFormSubmissionEventHandler() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     event.preventDefault();
//     getAndSetMadLibValues();
//     document.querySelector("div#story").removeAttribute("class");
//   }
// }

// window.onload = function() {
//   // inside of the window.onload handler function we only include
//   // the code that we want to run when
//   // the webpage has finished loading all resources
//   setFormSubmissionEventHandler();
// };
