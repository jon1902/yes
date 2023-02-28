

renderRoommate()

const roommatePageDivs = document.querySelectorAll(".roommateDiv") 

roommatePageDivs.forEach((roommatePageDiv) =>{
    roommatePageDiv.addEventListener("click", () => {
        handleShowRoommate(roommatePageDiv.innerHTML)
    })
})

