renderRoommate();
renderApartment();
var roommateBtn = document.querySelector(".roommateBtn");
var apartmentBtn = document.querySelector(".apartmentBtn");
roommateBtn.addEventListener("click", function () {
    console.log("bottun");
    location.href = ('roommate.html');
});
apartmentBtn.addEventListener("click", function () {
    console.log("bottun");
    location.href = ('apartmentBtn.html');
});
