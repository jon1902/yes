
const regSubmitButton = document.querySelector("#myButton");

if (regSubmitButton) {
  regSubmitButton.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const _name = document.querySelector("#name") as HTMLInputElement;
    const _email = document.querySelector("#email") as HTMLInputElement;
    const _tel = document.querySelector("#tel") as HTMLInputElement;
    const _username = document.querySelector("#username") as HTMLInputElement;
    const _password = document.querySelector("#password") as HTMLInputElement;
    
    const _newUser: User = new User(_username.value, _password.value);

    _newUser.setDetails({
      name: _name.value,
      tel: _tel.value,
      eMail: _email.value,
    });

    users.push(_newUser);

    localStorage.setItem("regNewUsers", JSON.stringify(users));
  });

  regSubmitButton.addEventListener("click", function () {
    window.location.assign("../homepage/homepage.html");
  });
}
