
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
        
        // let apartmentTemp:ApartmentProfil[] = []
        // apartmentArray.forEach((apartmentArrays, index) => {
            // apartmentProfils.push(
            //     new ApartmentProfil(
                console.log("tempDDDDDDDDDDDDDDdd");
                console.log(apartmentArray);
                
                
         for(let index = 0; index <  apartmentArray.length; index++ ){      
            // apartmentTemp[index] = apartmentArray[index]
                // apartmentTemp[index].uid=apartmentArray[index].uid,
                // apartmentTemp[index].address=apartmentArray[index].address,
                // apartmentTemp[index].city = apartmentArray[index].city,
                // apartmentTemp[index].neighbour = apartmentArray[index].neighbour,
                // apartmentTemp[index].area = apartmentArray[index].area,
                // apartmentTemp[index].animal = apartmentArray[index].animal,
                // apartmentTemp[index].smoke = apartmentArray[index].smoke,
                // apartmentTemp[index].floor = apartmentArray[index].floor,
                // apartmentTemp[index].rooms = apartmentArray[index].rooms,
                // apartmentTemp[index].partersNo = apartmentArray[index].partersNo,
                // apartmentTemp[index].price = apartmentArray[index].price,
                // apartmentTemp[index].apartmentImages[0].urlPicture = apartmentArray[index].apartmentImages[0].urlPicture,
              
                 apartmentProfils.push(apartmentArray[index])
                 console.log('apartmentTemp[index]');
                 console.log(apartmentArray[index]);
                 console.log("EEEEEEEEEEEEEEEEEEEEEEEק");
                 
         }
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
