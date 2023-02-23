renderRoommate();
renderApartment();
var roommateBtn = document.querySelector(".roommateBtn");
var apartmentBtn = document.querySelector(".apartmentBtn");
var roommateDivs = document.querySelectorAll(".roommateDiv");
var apartmentDivs = document.querySelectorAll(".apartmentDiv");
roommateBtn.addEventListener("click", function () {
    try {
        location.href = ('roommate.html');
    }
    catch (error) {
        console.error(error);
    }
});
apartmentBtn.addEventListener("click", function () {
    try {
        location.href = ('apartmentBtn.html');
    }
    catch (error) {
        console.error(error);
    }
});
roommateDivs.forEach(function (roommateDiv) {
    roommateDiv.addEventListener("click", function () {
        handleShowRoommate(roommateDiv.innerHTML);
    });
});
function handleShowRoommate(nameUser) {
    try {
        for (var i = 0; i < userProfils.length; i++) {
            if (nameUser.indexOf(userProfils[i].name) != -1) {
                console.log(userProfils[i].name);
                var html = "<div class=\"ditail__box\">\n                    <botton class=\"profilBtn\" onclick=\"hendelBtnBackToPage()\">X</botton>    \n                    <img class=\"ditail__box__img\"\n                    src= " + userProfils[i].imgSrc + " alt=\"roommate Img\">\n                    <h4>" + userProfils[i].name + "</h4>\n                    <p>My address is - " + userProfils[i].address + "</p>\n                    <p>I'm looking in - " + userProfils[i].city + " city</p>\n                    <p>I'm looking in -  " + userProfils[i].area + " area</p>\n                    <p>Animal - " + userProfils[i].animal + "</p>\n                    <p>Smoke - " + userProfils[i].smoke + " </p>\n                    <p>Up to  " + userProfils[i].flor + " flor</p>\n                    <p>Up to " + userProfils[i].rooms + " rooms</p>\n                    <p>Up to  " + userProfils[i].partersNo + " parters</p>\n                    <p>Up to " + userProfils[i].price + " NIS</p>\n                    </div>";
                console.log("html " + html);
                var element = document.getElementById("ditails");
                if (!element)
                    throw new Error("Couldnt find element in the DOM");
                element.innerHTML = html;
                element.style.display = "block";
                document.getElementById("containerBox").style.display = "none";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function hendelBtnBackToPage() {
    try {
        console.log("backPage");
        var elementDitail = document.getElementById("ditails");
        if (!elementDitail)
            throw new Error("Couldnt find element in the DOM");
        elementDitail.remove();
        location.reload();
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowAapartment(ev) {
    try {
        // console.log(ev)
        // const html = apartmentProfils
        // .map((profile) => {
        // return `
        // <div class="boxMain__container__boxes">
        // <img class="boxMain__container__boxes__img"
        //     src= ${apartments.apartmentImages[0].urlPicture} alt="roommate Img">
        // <h4>${apartments.city}</h4>
        // <p>We have a-${apartments.rooms} rooms</p>
        // <p>We live in ${apartments.flor} floor</p>
        // <p>The price is ${apartments.price} NIS</p>
        // </div>
        // `;
        // })
        // .join(" ");
        // // console.log(`htmlApartments ${html}`);
        // const element = document.querySelector(".apartments");
        // if (!element) throw new Error("Couldnt find element in the DOM");
        // element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
