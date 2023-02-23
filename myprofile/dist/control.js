var formData = { name: "", email: "", message: "" };
var formDataList = [];
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var messageInput = document.querySelector("#message");
var submitButton = document.querySelector("#submit-btn");
if (submitButton) {
    submitButton.addEventListener("click", function (e) {
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
var storedData = localStorage.getItem("formDataList");
if (storedData) {
    formDataList = JSON.parse(storedData);
}
