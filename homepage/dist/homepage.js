var homepageName = "homepage";
renderRoommate(users.length - 4, users.length);
renderApartment();
var indexArray = 0;
var roommateBtnHomepage = document.querySelector(".roommateBtn");
var apartmentBtnHomepage = document.querySelector(".apartmentBtn");
var roommateDivsHomepage = document.querySelectorAll(".roommateDiv");
var apartmentDivsHomepage = document.querySelectorAll(".apartmentDiv");
apartmentDivsHomepage.forEach(function (apartmentDivHomepage) {
    apartmentDivHomepage.addEventListener("click", function () {
        handleShowAapartment(apartmentDivHomepage.innerHTML);
    });
});
