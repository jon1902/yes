renderApartment();
var apartmentPageDivs = document.querySelectorAll(".apartmentDiv");
apartmentPageDivs.forEach(function (apartmentPageDiv) {
    apartmentPageDiv.addEventListener("click", function () {
        handleShowAapartment(apartmentPageDiv.innerHTML);
    });
});
