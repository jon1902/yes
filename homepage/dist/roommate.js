renderRoommate();
var roommatePageDivs = document.querySelectorAll(".roommateDiv");
roommatePageDivs.forEach(function (roommatePageDiv) {
    roommatePageDiv.addEventListener("click", function () {
        handleShowRoommate(roommatePageDiv.innerHTML);
    });
});
