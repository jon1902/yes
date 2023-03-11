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

const _name = document.querySelector("#name") as HTMLInputElement;
const _email = document.querySelector("#email") as HTMLInputElement;
const _tel = document.querySelector("#tel") as HTMLInputElement;
const _username = document.querySelector("#username") as HTMLInputElement;
const _password = document.querySelector("#password") as HTMLInputElement;

const _newUser:User = new User(_username.value,_password.value);
_newUser.setDetails({name:_name.value,tel:_tel.value,eMail:_email.value})

localStorage.setItem('newUser', JSON.stringify(_newUser));
  
