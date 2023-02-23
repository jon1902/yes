function renderRoommate(){
    try {
        if (!UserProfil || !Array.isArray(userProfils))
          throw new Error("items is not an array");
    
        const html = userProfils
           .map((users) => {
            return `
            <div class="boxMain__container__boxes roommateDiv">
            <img class="boxMain__container__boxes__img"
             src= ${users.imgSrc} alt="roommate Img">
            <h4>${users.name}</h4>
            <p>Looking in the ${users.area} area</p>
            <p>Up to a rooms ${users.rooms}</p>
            <p>Up to a floor ${users.flor}</p>
            </div>
            `;
          })
          .join(" ");
        // console.log(`html ${html}`);
        const element = document.querySelector(".roommate");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;

      } catch (error) {
        console.error(error);
      }
}

function renderApartment(){
    try {
        if (!ApartmentProfil || !Array.isArray(apartmentProfils))
          throw new Error("items is not an array");
    
        const html = apartmentProfils
           .map((apartments) => {
            return `
            <div class="boxMain__container__boxes apartmentDiv">
            <img class="boxMain__container__boxes__img"
             src= ${apartments.apartmentImages[0].urlPicture} alt="roommate Img">
            <h4>${apartments.city}</h4>
            <p>We have a-${apartments.rooms} rooms</p>
            <p>We live in ${apartments.flor} floor</p>
            <p>The price is ${apartments.price} NIS</p>
            </div>
            `;
          })
          .join(" ");
        // console.log(`htmlApartments ${html}`);
        const element = document.querySelector(".apartments");
        if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
      } catch (error) {
        console.error(error);
      }
}

