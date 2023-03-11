
// renderApartment()

// const apartmentPageDivs = document.querySelectorAll(".apartmentDiv")

// apartmentPageDivs.forEach((apartmentPageDiv) =>{
//     apartmentPageDiv.addEventListener("click", () => {
//         handleShowAapartment(apartmentPageDiv.innerHTML)
//     })
// })

let apartmentFromStorg =  window.localStorage.getItem('ApartmentList')

if(apartmentFromStorg != null){

    const apartmentArray = JSON.parse(apartmentFromStorg)
        
        
        apartmentArray.forEach(apartmentArrays => {
            apartmentProfils.push(
                new ApartmentProfil(
                  apartmentArrays.address,
                  apartmentArrays.city,
                  apartmentArrays.neighbour,
                  apartmentArrays.area,
                  apartmentArrays.animal,
                  apartmentArrays.smoke,
                  apartmentArrays.floor,
                  apartmentArrays.rooms,
                  apartmentArrays.partersNo,
                  apartmentArrays.price,
                  apartmentArrays.apartmentImage,

                ))
            apartmentProfils.push(apartmentArrays)

            console.log("QQQQQQQQQQQ");
            console.log(apartmentProfils);
                
        })
    }

console.log('apartmentProfilsXXXXXXX');
console.log(apartmentProfils);
// console.log(apartmentProfils);
// console.log(apartmentFromStorg);
    
let indexAEnd = 8
let indexAPage = 0
let endAPage = false

if(apartmentProfils.length < 9)
    indexAEnd = apartmentProfils.length

renderApartment(0, indexAEnd)

function hendleApartmentBackPage(){
    try{
        indexPage--
        if(indexPage < 0) indexPage = 0
        chekPageApartment()
    } catch (error) {
    console.error(error)        
    }
}

function hendleApartmentNextPage(){
    try {
        if(!endPage) indexAPage++
        chekPageApartment()
            
    } catch (error) {
        console.error(error)        
    }
}


function chekPageApartment(){
    try {
        if(!apartmentProfils) throw new Error("The array is empty")
        endAPage = false
        indexAEnd = ((indexAPage * 8) + 8)

        if(apartmentProfils.length < indexAEnd)    indexAEnd = apartmentProfils.length
        // console.log(`indexpage - ${indexPage} indexEnd - ${indexEnd}`)
        
        if(indexAPage * 8 < indexAEnd){
            renderApartment((indexAPage * 8) ,indexAEnd)
          
        }else{
            endAPage = true
            indexAPage--
        } 
   
    } catch (error) {
        console.error(error)
    }
}
