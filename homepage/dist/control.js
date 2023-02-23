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
apartmentDivs.forEach(function (apartmentDiv) {
    apartmentDiv.addEventListener("click", function () {
        handleShowAapartment(apartmentDiv.innerHTML);
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
function handleShowAapartment(apartmenNames) {
    try {
        console.log("apartmenNames");
        for (var i = 0; i < apartmentProfils.length; i++) {
            if (apartmenNames.indexOf(apartmentProfils[i].apartmentName) != -1) {
                console.log(apartmentProfils[i].apartmentName);
                var html = "<div class=\"ditail__box\">\n                    <botton class=\"profilBtn\" onclick=\"hendelBtnBackToPage()\">X</botton>    \n                    <img class=\"ditail__box__img\"\n                    src= " + apartmentProfils[i].apartmentImages[0] + " alt=\"roommate Img\">\n                    <h4>" + apartmentProfils[i].city + "</h4>\n                    <p>The address  - " + apartmentProfils[i].address + "</p>\n                    <p>The apartment city - " + apartmentProfils[i].city + " city</p>\n                    <p>The apartment area -  " + apartmentProfils[i].area + " area</p>\n                    <p>Animal - " + apartmentProfils[i].animal + "</p>\n                    <p>Smoke - " + apartmentProfils[i].smoke + " </p>\n                    <p>We live in " + apartmentProfils[i].flor + " flor</p>\n                    <p>We have " + apartmentProfils[i].rooms + " rooms</p>\n                    <p>The number of parters - " + apartmentProfils[i].partersNo + " parters</p>\n                    <p>The price is - " + apartmentProfils[i].price + " NIS</p>\n                    </div>";
                console.log("html " + html);
                var element = document.getElementById("ditails");
                if (!element)
                    throw new Error("Couldnt find element in the DOM");
                element.innerHTML = html;
                element.style.display = "block";
                document.getElementById("containerApartment").style.display = "none";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
