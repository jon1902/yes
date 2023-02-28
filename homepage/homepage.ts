
// pageName = "homepage"

renderRoommate()
renderApartment()

let indexArray = 0


const roommateBtnHomepage = document.querySelector(".roommateBtn") as HTMLButtonElement
const apartmentBtnHomepage = document.querySelector(".apartmentBtn") as HTMLButtonElement
const roommateDivsHomepage = document.querySelectorAll(".roommateDiv") 
const apartmentDivsHomepage = document.querySelectorAll(".apartmentDiv")

// roommateBtnHomepage.addEventListener("click",() =>{
//     try {
//         location.href = ('roommate.html')
//     } catch (error) {
//         console.error(error)        
//     }
// })


roommateDivsHomepage.forEach((roommateDivHomepage) =>{
    roommateDivHomepage.addEventListener("click", () => {
        console.log("roommateDivHomepage");
        handleShowRoommate(roommateDivHomepage.innerHTML)
    })
})

apartmentDivsHomepage.forEach((apartmentDivHomepage) =>{
    apartmentDivHomepage.addEventListener("click", () => {
        handleShowAapartment(apartmentDivHomepage.innerHTML)

    })
})


