function renderRoommate() {
    try {
        if (!UserProfil || !Array.isArray(userProfils))
            throw new Error("items is not an array");
        var html = userProfils
            .map(function (users) {
            return "\n            <div class=\"boxMain__container__boxes roommateDiv\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + users.imgSrc + " alt=\"roommate Img\">\n            <h4>" + users.name + "</h4>\n            <p>Looking in the " + users.area + " area</p>\n            <p>Up to a rooms " + users.rooms + "</p>\n            <p>Up to a floor " + users.flor + "</p>\n            </div>\n            ";
        })
            .join(" ");
        // console.log(`html ${html}`);
        var element = document.querySelector(".roommate");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderApartment() {
    try {
        if (!ApartmentProfil || !Array.isArray(apartmentProfils))
            throw new Error("Items is not an array");
        var html = apartmentProfils
            .map(function (apartments) {
            return "\n            <div class=\"boxMain__container__boxes apartmentDiv \">\n            <img class=\"boxMain__container__boxes__img " + apartments.apartmentName + "\"\n             src= " + apartments.apartmentImages[0].urlPicture + " alt=\"roommate Img\">\n            <h4>" + apartments.city + "</h4>\n            <p>We have a-" + apartments.rooms + " rooms</p>\n            <p>We live in " + apartments.flor + " floor</p>\n            <p>The price is " + apartments.price + " NIS</p>\n            </div>\n            ";
        })
            .join(" ");
        // console.log(`htmlApartments ${html}`);
        var element = document.querySelector(".apartments");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
