const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("password");
const emailErrorMessage = document.getElementById("email-error-message");
const passwordErrorMessage = document.getElementById("password-error-message");
const form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  // validar se o campo email é diferente de vazio.
  if (fieldEmail.value.trim() === "") {
    emailErrorMessage.textContent = "O e-mail é obrigatório";
    emailErrorMessage.style = "font-size: 12px; color: red;"; 
    return;
  }

  // validar se o campo senha é diferente de vazio.
  if (fieldPassword.value.trim() === "") {
    passwordErrorMessage.textContent = "O senha é obrigatório";
    passwordErrorMessage.style = "font-size: 12px; color: red;"; 
    return;
  }

  alert("Login realizado com sucesso!");
}

form.addEventListener("submit", handleSubmit)
