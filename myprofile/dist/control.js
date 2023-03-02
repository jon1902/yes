var nameInput = document.querySelector("#name");
var adressInput = document.querySelector("#adress");
var cityInput = document.querySelector("#city");
var areaInput = document.querySelector("#area");
var animalInput = document.querySelector("#animal");
var smokeInput = document.querySelector("#smoke");
// const florInput = document.querySelector("#flor") as HTMLInputElement;
var roomsInput = document.querySelector("#rooms");
// const partersNoInput = document.querySelector("#partersNo") as HTMLInputElement;
var priceInput = document.querySelector("#price");
var imgSrcInput = document.querySelector("#imgSrc");
var submitButton = document.querySelector("#myButton");
if (submitButton) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        userProfil.name = nameInput.value;
        userProfil.address = adressInput.value;
        userProfil.city = cityInput.value;
        userProfil.area = areaInput.value;
        userProfil.animal = animalInput.value;
        userProfil.smoke = smokeInput.value;
        // userProfil.flor = florInput.value;
        userProfil.rooms = roomsInput.value;
        // userProfil.partersNo = partersNoInput.value;
        userProfil.price = priceInput.value;
        userProfil.imgSrc = imgSrcInput.value;
        UserProfilList.push(userProfil);
        localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
        // nameInput.value = "";
        // adressInput.value = "";
        // cityInput.value = "";
        // areaInput.value = "";
        // animalInput.value = "";
        // smokeInput.value = "";
        // // florInput.value = "";
        // roomsInput.value = "";
        // // partersNoInput.value = "";
        // priceInput.value = "";
        // imgSrcInput.value = "";
    });
}
// retrieve data from local storage
var storedData = localStorage.getItem("UserProfilList");
console.log(storedData);
if (storedData) {
    UserProfilList = JSON.parse(storedData);
}
