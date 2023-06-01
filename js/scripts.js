window.onload = function () {
    let form = document.querySelector("form");

    form.onsubmit = function (event) {
        const person1Input = document.getElementById("person1Input").value;
        const person2Input = document.getElementById("person2Input").value;
        const animalInput = document.getElementById("animalInput").value;
        const exclamationInput = document.getElementById("exclamationInput").value;
        const verbInput = document.getElementById("verbInput").value;
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

        document.querySelector("div#story").removeAttribute("class");
        event.preventDefault();
    };
    //can use "event" in the argument or just the letter e. just be sure to mirrior that in the prevent default call
    //   form.onsubmit = function (event) {
    //       document.querySelector("span#person1a").innerText = "person 1";
    //       document.querySelector("span#person1b").innerText = "person 1";
    //       document.querySelector("span#person1c").innerText = "person 1";
    //       document.querySelector("span#person2a").innerText = "person 2";
    //       document.querySelector("span#person2b").innerText = "person 2";
    //       document.querySelector("span#animal").innerText = "an animal";
    //       document.querySelector("span#verb").innerText = "verb";
    //       document.querySelector("span#noun").innerText = "noun";
    //       document.querySelector("span#exclamation").innerText = "exclamation";

    //       document.querySelector("div#story").removeAttribute("class");
    //       event.preventDefault();
    //   };
};
