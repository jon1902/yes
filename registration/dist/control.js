if (document.querySelector(".registrationBtn")) {
    var registrationBtn = document.querySelector(".registrationBtn");
    registrationBtn.addEventListener("click", function () {
        try {
            location.href = ('/homepage/homepage.html');
        }
        catch (error) {
            console.error(error);
        }
    });
}
// set address(address:string){
//     this._address = address;
//   }
//   setDetails(options:Options){
//     const {city, area, animal, smoke, flor, rooms, partersNo,price, imgSrc} = options;
//     if(city) this.city = city;
//     if(area) this.area = area;
//   }
var _name = document.querySelector("#name");
var _email = document.querySelector("#email");
var _tel = document.querySelector("#tel");
var _username = document.querySelector("#username");
var _password = document.querySelector("#password");
var newUser = new User(_username.value, _password.value);
newUser.setDetails({ name: _name.value, tel: _tel.value, eMail: _email.value });
// localStorage.setItem("UserProfilList", JSON.stringify(userProfils));
