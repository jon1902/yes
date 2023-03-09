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

// set address(address:string){
//     this._address = address;
//   }

//   setDetails(options:Options){
//     const {city, area, animal, smoke, flor, rooms, partersNo,price, imgSrc} = options;
//     if(city) this.city = city;
//     if(area) this.area = area;
//   }


const _name = document.querySelector("#name") as HTMLInputElement;
const _email = document.querySelector("#email") as HTMLInputElement;
const _tel = document.querySelector("#tel") as HTMLInputElement;
const _username = document.querySelector("#username") as HTMLInputElement;
const _password = document.querySelector("#password") as HTMLInputElement;

const newUser:User = new User(_username.value,_password.value);
newUser.setDetails({name:_name.value,tel:_tel.value,eMail:_email.value})



    // localStorage.setItem("UserProfilList", JSON.stringify(userProfils));
  
