function renderRoommate() {
    try {
        if (!RoommateProfil || !Array.isArray(roommateProfils))
            throw new Error("items is not an array");
        var html = roommateProfils
            .map(function (roommates) {
            return "\n            <div class=\"boxMain__container__boxes\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + roommates.imgSrc + " alt=\"roommate Img\">\n            <h4>" + roommates.name + "</h4>\n            <p>Looking in the " + roommates.area + " area</p>\n            <p>Up to a rooms " + roommates.rooms + "</p>\n            <p>Up to a floor " + roommates.flor + "</p>\n            </div>\n            ";
        })
            .join(" ");
        console.log("html " + html);
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
            throw new Error("items is not an array");
        var html = apartmentProfils
            .map(function (apartments) {
            return "\n            <div class=\"boxMain__container__boxes\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + apartments.imgSrc + " alt=\"roommate Img\">\n            <h4>" + apartments.city + "</h4>\n            <p>We have a-" + apartments.rooms + " rooms</p>\n            <p>We live in " + apartments.flor + " floor</p>\n            <p>The price is " + apartments.price + " NIS</p>\n\n            </div>\n            ";
        })
            .join(" ");
        console.log("htmlApartments " + html);
        var element = document.querySelector(".apartments");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
