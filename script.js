// Snake Safety form validation

const snakeForm = document.querySelector("#snakeForm");
const formMessage = document.querySelector("#formMessage");

snakeForm.addEventListener("submit", function(event) {

   const name = document.querySelector("#name").value.trim();
   const favorite = document.querySelector("#favorite").value;
   const reason = document.querySelector("#reason").value.trim();

   if (name === "" || favorite === "" || reason === "") {
      event.preventDefault();
      formMessage.textContent = "Please fill out every field.";
      return;
   }

   if (reason.length < 5) {
      event.preventDefault();
      formMessage.textContent = "Please explain your answer a little more.";
      return;
   }

   formMessage.textContent = "Submitting your response...";

});
