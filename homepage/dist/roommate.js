var userFromStorg = window.localStorage.getItem('UserProfilList');
if (userFromStorg != null) {
    var userArray = JSON.parse(userFromStorg);
    // console.log(userArray)
    userArray.forEach(function (userArrays) {
        userProfils.push(new UserProfil(userArrays.name, userArrays.address, userArrays.city, userArrays.area, userArrays.animal, userArrays.smoke, userArrays.flor, userArrays.rooms, userArrays.partersNo, userArrays.price, userArrays.imgSrc));
    });
}
console.log(userProfils.length);
var indexEnd = 8;
var indexPage = 0;
var endPage = false;
if (userProfils.length < 9)
    indexEnd = userProfils.length;
renderRoommate(0, indexEnd);
function hendleRoommateBackPage() {
    try {
        indexPage--;
        if (indexPage < 0)
            indexPage = 0;
        chekPage();
    }
    catch (error) {
        console.error(error);
    }
}
function hendleRoommateNextPage() {
    try {
        if (!endPage)
            indexPage++;
        chekPage();
    }
    catch (error) {
        console.error(error);
    }
}
function chekPage() {
    try {
        if (!userProfils)
            throw new Error("The array is empty");
        endPage = false;
        indexEnd = ((indexPage * 8) + 8);
        if (userProfils.length < indexEnd)
            indexEnd = userProfils.length;
        console.log("indexpage - " + indexPage + " indexEnd - " + indexEnd);
        if (indexPage * 8 < indexEnd) {
            renderRoommate(((indexPage) * 8), indexEnd);
        }
        else {
            endPage = true;
            indexPage--;
        }
    }
    catch (error) {
        console.error(error);
    }
}
