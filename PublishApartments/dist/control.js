var adressInput = document.querySelector("#adress");
var cityInput = document.querySelector("#city");
var areaInput = document.querySelector("#area");
var animalInput = document.querySelector("#animal");
var smokeInput = document.querySelector("#smoke");
var floorInput = document.querySelector("#floor");
var roomsInput = document.querySelector("#rooms");
var partersNoInput = document.querySelector("#partersNo");
var priceInput = document.querySelector("#price");
var imgSrcInput = document.querySelector("#imgSrc");
var submitButton = document.querySelector("#myButton");
if (submitButton) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        newApartment.push(new ApartmentProfil(adressInput.value, cityInput.value, "", areaInput.value, animalInput.value, smokeInput.value, floorInput.value, roomsInput.value, partersNoInput.value, priceInput.value, imgSrcInput.value));
        var apartmentFromStorg = window.localStorage.getItem('ApartmentList');
        if (apartmentFromStorg != null) {
            apartmentList = JSON.parse(apartmentFromStorg);
        }
        apartmentList.push(newApartment);
        console.log("apartmentList");
        console.log(apartmentList);
        localStorage.setItem("ApartmentList", JSON.stringify(apartmentList));
        // nameInput.value = "";
        adressInput.value = "";
        cityInput.value = "";
        areaInput.value = "";
        animalInput.value = "";
        smokeInput.value = "";
        floorInput.value = "";
        roomsInput.value = "";
        partersNoInput.value = "";
        priceInput.value = "";
        imgSrcInput.value = "";
    });
    submitButton.addEventListener("click", function () {
        window.location.assign('../homepage/homepage.html');
    });
}
// retrieve data from local storage
var storedData = localStorage.getItem("ApartmentList");
// console.log("storedData")
// console.log(storedData)
if (storedData) {
    UserProfilList = JSON.parse(storedData);
}
