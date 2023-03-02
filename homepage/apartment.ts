
renderApartment()

const apartmentPageDivs = document.querySelectorAll(".apartmentDiv")

apartmentPageDivs.forEach((apartmentPageDiv) =>{
    apartmentPageDiv.addEventListener("click", () => {
        handleShowAapartment(apartmentPageDiv.innerHTML)
    })
})

