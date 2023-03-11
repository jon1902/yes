var regSubmitButton = document.querySelector("#myButton");
if (regSubmitButton) {
    regSubmitButton.addEventListener("click", function (e) {
        e.preventDefault();
        var _name = document.querySelector("#name");
        var _email = document.querySelector("#email");
        var _tel = document.querySelector("#tel");
        var _username = document.querySelector("#username");
        var _password = document.querySelector("#password");
        var _newUser = new User(_username.value, _password.value);
        _newUser.setDetails({
            name: _name.value,
            tel: _tel.value,
            eMail: _email.value
        });
        var userFromStorg = window.localStorage.getItem('registraionNewUsers');
        if (userFromStorg != null) {
            var registraionNewUsers = JSON.parse(userFromStorg);
            if (registraionNewUsers) {
                registraionNewUsers.push(_newUser);
                localStorage.setItem("registraionNewUsers", JSON.stringify(registraionNewUsers));
                console.log(registraionNewUsers);
            }
        }
    });
    //   regSubmitButton.addEventListener("click", function () {
    //     window.location.assign("../homepage/homepage.html");
    //   });
}
