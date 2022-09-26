const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Не все поля заполнены!");
    return;
  }

  const objects = { Email: email.value, Password: password.value };

  console.log(objects);
  formRef.reset();
});
