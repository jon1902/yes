function renderRoommate(indexStart, indexEnd) {
    try {
        if (!UserProfil || !Array.isArray(userProfils))
            throw new Error("Items is not an array");
        var tempUserProfiles = [];
        console.log("indexStart " + indexStart + " indexEnd " + indexEnd);
        for (var i = indexStart; i < indexEnd; i++) {
            tempUserProfiles.push(new UserProfil(userProfils[i].name, userProfils[i].address, userProfils[i].city, userProfils[i].area, userProfils[i].animal, userProfils[i].smoke, userProfils[i].flor, userProfils[i].rooms, userProfils[i].partersNo, userProfils[i].price, userProfils[i].imgSrc));
        }
        var html = tempUserProfiles
            .map(function (users) {
            return "\n            <div class=\"boxMain__container__boxes roommateDiv roommatePage__container\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + users.imgSrc + " alt=\"roommate Img\">\n            <h4>" + users.name + "</h4>\n            <p>Area: " + users.area + "</p>\n            <p>Rooms: up to " + users.rooms + "</p>\n            <p>floor: up to " + users.flor + "</p>\n            </div>\n            ";
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
            return "\n            <div class=\"boxMain__container__boxes apartmentDiv \">\n            <img class=\"boxMain__container__boxes__img " + apartments.apartmentName + "\"\n             src= " + apartments.apartmentImages[0].urlPicture + " alt=\"roommate Img\">\n            <h4>" + apartments.city + "</h4>\n            <p>Rooms: " + apartments.rooms + "</p>\n            <p>Floor: " + apartments.flor + "</p>\n            <p>Price: " + apartments.price + " NIS</p>\n            </div>\n            ";
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
