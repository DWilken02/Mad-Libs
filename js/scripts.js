window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");
  
  form.addEventListener("submit", function(event) {
    //const person1Input = document.getElementById("person1Input").value;
    //const person2Input = document.getElementById("person2Input").value;
    //const animalInput= document.getElementById("animalInput").value;
    //const exclamationInput = document.getElementById("exclamationInput").value;
    //const verbInput = document.getElementById("verbInput").value;
    //console.log("verbInput = " + verbInput);
    //const nounInput = document.getElementById("nounInput").value;

    //document.querySelector("span#person1a").innerText = person1Input;
    //document.querySelector("span#person1b").innerText = person1Input;
    //document.querySelector("span#person1c").innerText = person1Input;
    //document.querySelector("span#person2a").innerText = person2Input;
    //document.querySelector("span#person2b").innerText = person2Input;
    //document.querySelector("span#animal").innerText = animalInput;
    //console.log("Correctly targeting <span>? = ", document.querySelector("span#verb"));
    //console.log("Correctly targeting innerText? = ", document.querySelector("span#verb").inerText);
    //document.querySelector("span#verb").innerText = verbInput;
    //console.log("Correctly referencing verbInput and assigning value of innerText? = ", document.querySelector("span#verb").inerText);
    //document.querySelector("span#noun").innerText = nounInput;
    //document.querySelector("span#exclamation").innerText = exclamationInput;

    document.querySelector("div#story").removeAttribute("class");
  event.preventDefault();
  });
});