// pageName = "homepage"
renderRoommate();
renderApartment();
var indexArray = 0;
var roommateBtnHomepage = document.querySelector(".roommateBtn");
var apartmentBtnHomepage = document.querySelector(".apartmentBtn");
var roommateDivsHomepage = document.querySelectorAll(".roommateDiv");
var apartmentDivsHomepage = document.querySelectorAll(".apartmentDiv");
// roommateBtnHomepage.addEventListener("click",() =>{
//     try {
//         location.href = ('roommate.html')
//     } catch (error) {
//         console.error(error)        
//     }
// })
roommateDivsHomepage.forEach(function (roommateDivHomepage) {
    roommateDivHomepage.addEventListener("click", function () {
        console.log("roommateDivHomepage");
        handleShowRoommate(roommateDivHomepage.innerHTML);
    });
});
apartmentDivsHomepage.forEach(function (apartmentDivHomepage) {
    apartmentDivHomepage.addEventListener("click", function () {
        handleShowAapartment(apartmentDivHomepage.innerHTML);
    });
});
