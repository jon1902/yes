
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
            <p>Area: ${users.area}</p>
            <p>Rooms: up to ${users.rooms}</p>
            <p>floor: up to ${users.flor}</p>
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
            <div class="boxMain__container__boxes apartmentDiv ">
            <img class="boxMain__container__boxes__img ${apartments.apartmentName}"
             src= ${apartments.apartmentImages[0].urlPicture} alt="roommate Img">
            <h4>${apartments.city}</h4>
            <p>Rooms: ${apartments.rooms}</p>
            <p>Floor: ${apartments.flor}</p>
            <p>Price: ${apartments.price} NIS</p>
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

