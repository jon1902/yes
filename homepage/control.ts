
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
apartmentDivs.forEach((apartmentDiv) =>{
    apartmentDiv.addEventListener("click", () => {
        console.log(apartmentDiv.innerHTML);
        
        handleShowAapartment(apartmentDiv.innerHTML)

    })
})


function handleShowRoommate(nameUser:string) : void{
    try{
        for(let i=0; i < userProfils.length; i++){
            if(nameUser.indexOf(userProfils[i].name) != -1){
                console.log(userProfils[i].name)
                const html =    
                    `<div class="ditail__box">
                    <div class="ditail__box_containerBtn">
                    <botton class="profilBtn ditail__box__containerBtn__btn" onclick="hendelBtnBackToPage()">X</botton>    
                    </div>
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
        document.getElementById("containerBox")!.style.opacity = "0.6"
        document.getElementById("containerApartment")!.style.opacity = "0.6"

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

function handleShowAapartment(apartmenNames:string): void{
    try{
        console.log(apartmenNames);
        
        for(let i=0; i < apartmentProfils.length; i++){
            if(apartmenNames.indexOf(apartmentProfils[i].apartmentName) != -1){
                                
                const html = 
                    `<div id="ditailBox" class="ditail__box ">
                    <div class="ditail__box_containerBtn">
                    <botton class="profilBtn ditail__box__containerBtn__btn" onclick="hendelBtnBackToPage()">X</botton><br>    
                    <botton class="profilBtn galleryBtn ditail__box__containerBtn__btn" onclick="hendelShowGallery(${i})">More picture</botton>    
                    </div>
                    <img class="ditail__box__img"
                    src= ${apartmentProfils[i].apartmentImages[0].urlPicture} alt="roommate Img">
                    <h4>${apartmentProfils[i].city}</h4>
                    <p>The address  - ${apartmentProfils[i].address}</p>
                    <p>The apartment city - ${apartmentProfils[i].city} city</p>
                    <p>The apartment area -  ${apartmentProfils[i].area} area</p>
                    <p>Animal - ${apartmentProfils[i].animal}</p>
                    <p>Smoke - ${apartmentProfils[i].smoke} </p>
                    <p>We live in ${apartmentProfils[i].flor} flor</p>
                    <p>We have ${apartmentProfils[i].rooms} rooms</p>
                    <p>The number of parters - ${apartmentProfils[i].partersNo} parters</p>
                    <p>The price is - ${apartmentProfils[i].price} NIS</p>
                    </div>`;
        
        console.log(`html ${html}`);
        const element = document.getElementById("ditails");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
        element.style.display = "block"
        document.getElementById("containerApartment")!.style.opacity = "0.6"
        document.getElementById("containerBox")!.style.opacity = "0.6"
        }
    }
    } catch (error) {
    console.error(error);   
    }
}

function hendelShowGallery(index:number): void{
    try {
        const element = document.getElementById("ditailBox");
        if (!element) throw new Error("Couldnt find element in the DOM");
        console.log(element);




        
        
        
    } catch (error) {
        console.error(error)
    }
   
}