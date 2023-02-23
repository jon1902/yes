interface FormData {
    name: string;
    email: string;
    message: string;
  }
  

 const formData: FormData = { name: "", email: "", message: "" };
  let formDataList: FormData[] = [];
  
  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const emailInput = document.querySelector("#email") as HTMLInputElement;
  const messageInput = document.querySelector("#message") as HTMLInputElement;
  const submitButton = document.querySelector("#submit-btn");
  
  if (submitButton) {
    submitButton.addEventListener("click", (e: Event) => {
      e.preventDefault();
      formData.name = nameInput.value;
      formData.email = emailInput.value;
      formData.message = messageInput.value;
      formDataList.push(formData);
      localStorage.setItem("formDataList", JSON.stringify(formDataList));
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    });
  }
  
  // retrieve data from local storage
  const storedData = localStorage.getItem("formDataList");
  
  if (storedData) {
    formDataList = JSON.parse(storedData);
  }
  