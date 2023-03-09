if(document.querySelector(".registrationBtn")){
    const registrationBtn = document.querySelector(".registrationBtn") as HTMLButtonElement
    registrationBtn.addEventListener("click",() =>{
        try {
            location.href = ('/homepage/homepage.html')
        } catch (error) {
            console.error(error)        
        }
    })
}

set address(address:string){
    this._address = address;
  }

  setDetails(options:Options){
    const {city, area, animal, smoke, flor, rooms, partersNo,price, imgSrc} = options;
    if(city) this.city = city;
    if(area) this.area = area;
  }

  
const nameInput = document.querySelector("#name") as HTMLInputElement;
const adressInput = document.querySelector("#adress") as HTMLInputElement;
const cityInput = document.querySelector("#city") as HTMLInputElement;
const areaInput = document.querySelector("#area") as HTMLInputElement;
const animalInput = document.querySelector("#animal") as HTMLInputElement;
const smokeInput = document.querySelector("#smoke") as HTMLInputElement;
const roomsInput = document.querySelector("#rooms") as HTMLInputElement;
const priceInput = document.querySelector("#price") as HTMLInputElement;
const imgSrcInput = document.querySelector("#imgSrc") as HTMLInputElement;

userProfils.push(new UserProfil(
    nameInput,
    adressInput,
    cityInput,
    areaInput,
    animalInput,
    smokeInput,
    '',
    roomsInput,
    '',
    priceInput,
    imgSrcInput
))




    localStorage.setItem("UserProfilList", JSON.stringify(userProfils));
  
