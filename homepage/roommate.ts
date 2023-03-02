

let userFromStorg =  window.localStorage.getItem('UserProfilList')

if(userFromStorg != null){
    
    // console.log(userFromStorg);
    let userArray = JSON.parse(userFromStorg)
    // console.log(userArray)
        userArray.forEach(userArrays => {
            userProfils.push(new UserProfil(userArrays.name, userArrays.address, userArrays.city, userArrays.area,userArrays.animal, userArrays.smoke, userArrays.flor, userArrays.rooms, userArrays.partersNo, userArrays.price, userArrays.imgSrc))
        })
}

renderRoommate()

const roommatePageDivs = document.querySelectorAll(".roommateDiv") 

roommatePageDivs.forEach((roommatePageDiv) =>{
    roommatePageDiv.addEventListener("click", () => {
        handleShowRoommate(roommatePageDiv.innerHTML)
    })
})

