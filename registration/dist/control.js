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
<<<<<<< HEAD
        var registraionNewUsers = [];
        if (registraionNewUsers) {
            registraionNewUsers.push(_newUser);
            localStorage.setItem("registraionNewUsers", JSON.stringify(registraionNewUsers));
            console.log(registraionNewUsers);
=======
        var userFromStorg = window.localStorage.getItem('registraionNewUsers');
        if (userFromStorg != null) {
            var registraionNewUsers = JSON.parse(userFromStorg);
            if (registraionNewUsers) {
                registraionNewUsers.push(_newUser);
                localStorage.setItem("registraionNewUsers", JSON.stringify(registraionNewUsers));
                console.log(registraionNewUsers);
            }
>>>>>>> 0bcb56b2d5936b5a41a544b1b7bb5f42e51b00c5
        }
    });
    //   regSubmitButton.addEventListener("click", function () {
    //     window.location.assign("../homepage/homepage.html");
    //   });
}
// if (submitButton) {
//     submitButton.addEventListener("click", (e: Event) => {
//       e.preventDefault();
//     let newUser:User = new User(nameInput.value, "123");
//     newUser.setDetails({
//         name: nameInput.value,
//         address: adressInput.value,
//         city: cityInput.value,
//         area: areaInput.value,
//         animal: animalInput.value,
//         smoke: smokeInput.value,
//         floor: floorInput.value,
//         rooms: roomsInput.value,
//         partersNo: partersNoInput.value,
//         price: priceInput.value,
//         imgSrc: imgSrcInput.value,
//     })
//     users.push(newUser)
//     UserProfilList.push(newUser);
//       localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
//       nameInput.value = "";
//       adressInput.value = "";
//       cityInput.value = "";
//       areaInput.value = "";
//       animalInput.value = "";
//       smokeInput.value = "";
//       floorInput.value = "";
//       roomsInput.value = "";
//       partersNoInput.value = "";
//       priceInput.value = "";
//       imgSrcInput.value = "";
//     });
//     submitButton.addEventListener("click", function() {
//         window.location.assign('../homepage/homepage.html');
//     });
//   }
