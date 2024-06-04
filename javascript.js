/* all the javascript you are ever going to want to see. */

/* print the name of the page string passed into the function*/
function iWantToPrintThePageName(pageNameSTR) {
  console.log("Hello World -" + " " + pageNameSTR);
  return;
}

console.log("Hello World - generic");

/* Required javascript for contact form functinality */
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "./emailSuccess.html";
});
