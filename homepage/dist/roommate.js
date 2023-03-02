var userFromStorg = window.localStorage.getItem('UserProfilList');
if (userFromStorg != null) {
    // console.log(userFromStorg);
    var userArray = JSON.parse(userFromStorg);
    // console.log(userArray)
    userArray.forEach(function (userArrays) {
        userProfils.push(new UserProfil(userArrays.name, userArrays.address, userArrays.city, userArrays.area, userArrays.animal, userArrays.smoke, userArrays.flor, userArrays.rooms, userArrays.partersNo, userArrays.price, userArrays.imgSrc));
    });
}
renderRoommate();
var roommatePageDivs = document.querySelectorAll(".roommateDiv");
roommatePageDivs.forEach(function (roommatePageDiv) {
    roommatePageDiv.addEventListener("click", function () {
        handleShowRoommate(roommatePageDiv.innerHTML);
    });
});
