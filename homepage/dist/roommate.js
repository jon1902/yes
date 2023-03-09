var userFromStorg = window.localStorage.getItem('UserProfilList');
if (userFromStorg != null) {
    var userArray = JSON.parse(userFromStorg);
    // console.log(userArray)
    userArray.forEach(function (userArrays) {
        users.push(new User(userArrays.name, userArrays.address, userArrays.city, userArrays.area, userArrays.animal, userArrays.smoke, userArrays.flor, userArrays.rooms, userArrays.partersNo, userArrays.price, userArrays.imgSrc));
    });
}
console.log(users.length);
var indexEnd = 8;
var indexPage = 0;
var endPage = false;
if (users.length < 9)
    indexEnd = users.length;
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
        if (!users)
            throw new Error("The array is empty");
        endPage = false;
        indexEnd = ((indexPage * 8) + 8);
        if (users.length < indexEnd)
            indexEnd = users.length;
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
