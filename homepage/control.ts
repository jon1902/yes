
renderRoommate()
renderApartment()

const roommateBtn = document.querySelector(".roommateBtn") as HTMLButtonElement
const apartmentBtn = document.querySelector(".apartmentBtn") as HTMLButtonElement

roommateBtn.addEventListener("click",() =>{
    console.log("bottun");
    
    location.href = ('roommate.html')

})
apartmentBtn.addEventListener("click",() =>{
    console.log("bottun");
    
    location.href = ('apartmentBtn.html')

})