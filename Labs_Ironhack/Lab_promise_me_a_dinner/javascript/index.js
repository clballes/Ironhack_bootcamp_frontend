// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));
  



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
async function makeBroccoli() {
  broccoli.push("Broccoli is ready!");
  for (let i = 0; i < broccoli.length; i++){
    let step = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  }
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all

const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1= obtainInstruction("brusselsSprouts", 1);
const paso2= obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts",3);
const paso4 = obtainInstruction("brusselsSprouts",4);
const paso5 = obtainInstruction("brusselsSprouts",5);
const paso6 = obtainInstruction("brusselsSprouts",6);

Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6]).then((valorArray) => {
  valorArray.forEach((instruccion) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruccion}</li>`;
  });
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
  .catch((error) => console.log(error));
  

