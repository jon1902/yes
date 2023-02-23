class UserProfil {
    uid: string;
    
    constructor(
      public name: string,
      public address: string,
      public city: string,
      public area: string,
      public animal: string,
      public smoke: string,
      public flor: string,
      public rooms: string,
      public partersNo: string,
      public price: string,
      public imgSrc: string,
      
    ) {
      this.uid = uid();
    }
  }
  
  
  const userProfil: UserProfil = {uid:"", name: "", address: "", city: "",area: "",animal: "",smoke: "",flor: "",rooms: "",partersNo: "",price:"",imgSrc:""};
  let UserProfilList: UserProfil[] = [];
  
  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const adressInput = document.querySelector("#adress") as HTMLInputElement;
  const cityInput = document.querySelector("#city") as HTMLInputElement;
  const areaInput = document.querySelector("#area") as HTMLInputElement;
  const animalInput = document.querySelector("#animal") as HTMLInputElement;
  const smokeInput = document.querySelector("#smoke") as HTMLInputElement;
  // const florInput = document.querySelector("#flor") as HTMLInputElement;
  const roomsInput = document.querySelector("#rooms") as HTMLInputElement;
  // const partersNoInput = document.querySelector("#partersNo") as HTMLInputElement;
  const priceInput = document.querySelector("#price") as HTMLInputElement;
  const imgSrcInput = document.querySelector("#imgSrc") as HTMLInputElement;

  const submitButton = document.querySelector("#myButton");
  
  if (submitButton) {
    submitButton.addEventListener("click", (e: Event) => {
      e.preventDefault();
      userProfil.name = nameInput.value;
      userProfil.address = adressInput.value;
      userProfil.city = cityInput.value;
      userProfil.area = areaInput.value;
      userProfil.animal = animalInput.value;
      userProfil.smoke = smokeInput.value;
      // userProfil.flor = florInput.value;
      userProfil.rooms = roomsInput.value;
      // userProfil.partersNo = partersNoInput.value;
      userProfil.price = priceInput.value;
      userProfil.imgSrc = imgSrcInput.value;

      UserProfilList.push(userProfil);
      localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
      nameInput.value = "";
      adressInput.value = "";
      cityInput.value = "";
      areaInput.value = "";
      animalInput.value = "";
      smokeInput.value = "";
      // florInput.value = "";
      roomsInput.value = "";
      // partersNoInput.value = "";
      priceInput.value = "";
      imgSrcInput.value = "";
    });
  }
  
  // retrieve data from local storage
  const storedData = localStorage.getItem("UserProfilList");
  
  if (storedData) {
    UserProfilList = JSON.parse(storedData);
  }