// renderApartment()
// const apartmentPageDivs = document.querySelectorAll(".apartmentDiv")
// apartmentPageDivs.forEach((apartmentPageDiv) =>{
//     apartmentPageDiv.addEventListener("click", () => {
//         handleShowAapartment(apartmentPageDiv.innerHTML)
//     })
// })
var apartmentFromStorg = window.localStorage.getItem('ApartmentList');
console.log("LLLLLLLLLLLLLLLLLL");
console.log(apartmentFromStorg);
console.log("LLLLLLLLLLLLLLLLLL");
if (apartmentFromStorg != null) {
    apartmentFromStorg = apartmentFromStorg.replaceAll("[", "");
    apartmentFromStorg = apartmentFromStorg.replaceAll("]", "");
    apartmentFromStorg = "[" + apartmentFromStorg + "]";
    var apartmentArray = JSON.parse(apartmentFromStorg);
    apartmentArray.forEach(function (apartmentArrays) {
        apartmentProfils.push(new ApartmentProfil(apartmentArrays.address, apartmentArrays.city, apartmentArrays.neighbour, apartmentArrays.area, apartmentArrays.animal, apartmentArrays.smoke, apartmentArrays.floor, apartmentArrays.rooms, apartmentArrays.partersNo, apartmentArrays.price, apartmentArrays.apartmentImage));
        apartmentProfils.push(apartmentArrays);
    });
}
var indexAEnd = 8;
var indexAPage = 0;
var endAPage = false;
if (apartmentProfils.length < 9)
    indexAEnd = apartmentProfils.length;
renderApartment(0, indexAEnd);
function hendleApartmentBackPage() {
    try {
        indexAPage--;
        if (indexAPage < 0)
            indexAPage = 0;
        chekPageApartment();
    }
    catch (error) {
        console.error(error);
    }
}
function hendleApartmentNextPage() {
    try {
        if (!endAPage)
            indexAPage++;
        chekPageApartment();
    }
    catch (error) {
        console.error(error);
    }
}
function chekPageApartment() {
    try {
        if (!apartmentProfils)
            throw new Error("The array is empty");
        endAPage = false;
        indexAEnd = ((indexAPage * 8) + 8);
        if (apartmentProfils.length < indexAEnd)
            indexAEnd = apartmentProfils.length;
        // console.log(`indexpage - ${indexPage} indexEnd - ${indexEnd}`)
        if (indexAPage * 8 < indexAEnd) {
            renderApartment((indexAPage * 8), indexAEnd);
        }
        else {
            endAPage = true;
            indexAPage--;
        }
    }
    catch (error) {
        console.error(error);
    }
}
