
renderRoommate()
renderApartment()


const roommateBtn = document.querySelector(".roommateBtn") as HTMLButtonElement
const apartmentBtn = document.querySelector(".apartmentBtn") as HTMLButtonElement
const roommateDivs = document.querySelectorAll(".roommateDiv") 
const apartmentDivs = document.querySelectorAll(".apartmentDiv")

roommateBtn.addEventListener("click",() =>{
    try {
        location.href = ('roommate.html')
    } catch (error) {
        console.error(error)        
    }
})

apartmentBtn.addEventListener("click",() =>{
    try {
        location.href = ('apartmentBtn.html')
        
    } catch (error) {
        console.error(error)        
    }
})

roommateDivs.forEach((roommateDiv) =>{
    roommateDiv.addEventListener("click", () => {
        handleShowRoommate(roommateDiv.innerHTML)
    })
})


function handleShowRoommate(nameUser:string) : void{
    try{
        for(let i=0; i < userProfils.length; i++){
            if(nameUser.indexOf(userProfils[i].name) != -1){
                console.log(userProfils[i].name)
                const html = 
                    `<div class="ditail__box">
                    <botton class="profilBtn" onclick="hendelBtnBackToPage()">X</botton>    
                    <img class="ditail__box__img"
                    src= ${userProfils[i].imgSrc} alt="roommate Img">
                    <h4>${userProfils[i].name}</h4>
                    <p>My address is - ${userProfils[i].address}</p>
                    <p>I'm looking in - ${userProfils[i].city} city</p>
                    <p>I'm looking in -  ${userProfils[i].area} area</p>
                    <p>Animal - ${userProfils[i].animal}</p>
                    <p>Smoke - ${userProfils[i].smoke} </p>
                    <p>Up to  ${userProfils[i].flor} flor</p>
                    <p>Up to ${userProfils[i].rooms} rooms</p>
                    <p>Up to  ${userProfils[i].partersNo} parters</p>
                    <p>Up to ${userProfils[i].price} NIS</p>
                    </div>`;
        
        console.log(`html ${html}`);
        const element = document.getElementById("ditails");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block"
        document.getElementById("containerBox")!.style.display = "none"
        }
    }
    } catch (error) {
        console.error(error);
    }
}

function hendelBtnBackToPage(){
    try {
        console.log("backPage");
        
        const elementDitail = document.getElementById("ditails");
        if (!elementDitail) throw new Error("Couldnt find element in the DOM");
        elementDitail.remove()
        location.reload()
       
    } catch (error) {
        console.error(error)
    }


}
function handleShowAapartment(ev){
    try{
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
     } catch (error) {
        console.error(error);
     }
}