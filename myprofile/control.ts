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
      // nameInput.value = "";
      // adressInput.value = "";
      // cityInput.value = "";
      // areaInput.value = "";
      // animalInput.value = "";
      // smokeInput.value = "";
      // // florInput.value = "";
      // roomsInput.value = "";
      // // partersNoInput.value = "";
      // priceInput.value = "";
      // imgSrcInput.value = "";
    });
  }
  
  // retrieve data from local storage
  const storedData = localStorage.getItem("UserProfilList");

  console.log(storedData)
  
  if (storedData) {
    UserProfilList = JSON.parse(storedData);
  }