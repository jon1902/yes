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
set;
address(address, string);
{
    this._address = address;
}
setDetails(options, Options);
{
    var city = options.city, area = options.area, animal = options.animal, smoke = options.smoke, flor = options.flor, rooms = options.rooms, partersNo = options.partersNo, price = options.price, imgSrc = options.imgSrc;
    if (city)
        this.city = city;
    if (area)
        this.area = area;
}
var nameInput = document.querySelector("#name");
var adressInput = document.querySelector("#adress");
var cityInput = document.querySelector("#city");
var areaInput = document.querySelector("#area");
var animalInput = document.querySelector("#animal");
var smokeInput = document.querySelector("#smoke");
var roomsInput = document.querySelector("#rooms");
var priceInput = document.querySelector("#price");
var imgSrcInput = document.querySelector("#imgSrc");
userProfils.push(new UserProfil(nameInput, adressInput, cityInput, areaInput, animalInput, smokeInput, '', roomsInput, '', priceInput, imgSrcInput));
localStorage.setItem("UserProfilList", JSON.stringify(userProfils));
